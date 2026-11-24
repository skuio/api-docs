/**
 * Deploy-time publisher for the public "SKU.io API" Postman collection.
 *
 * Keeps the public workspace collection — the one the "Run in Postman" badge
 * forks — in lockstep with what developer.sku.io renders. Runs after a
 * successful Pages deploy (postman-sync.yml), reading the freshly generated
 * static/skuio-api.postman_collection.json and replacing the existing public
 * collection's contents so its UID (and therefore the badge URL) never changes.
 *
 * The collection UID and workspace are public identifiers (they appear in the
 * badge URL) so they live here as constants. Only the API key is a secret and
 * comes from the POSTMAN_API_KEY env var (the POSTMAN_API_KEY repo secret in
 * CI). If it is absent — local builds, forks, PRs — this step logs and skips.
 *
 * ── How the replace works (Postman API "Replace collection's data asynchronously")
 * 1. Carry the live collection's ids into the generated one. Postman's docs: "If
 *    you don't include the collection items' ID values … the endpoint removes the
 *    existing items and recreates the items with new ID values." The generator
 *    emits no ids, so every sync used to delete and recreate ~9,000 requests and
 *    examples, a server job that runs for hours.
 * 2. PUT with `Prefer: respond-async`. Postman answers 202 with a task id.
 * 3. Poll GET /collection-updates-tasks/{taskId} until it succeeds or fails.
 *
 * Any failure exits non-zero so the workflow goes red.
 *
 * _removed 2026-11-24: plain PUT without ids, treating 409/5xx/timeout as "async
 * deepupdate, probably fine" and exiting 0. Every sync from at least 2026-10-25
 * to 2026-11-24 got 409 "currently being modified by deepupdate" and reported
 * green. The public collection stayed on the 2026-11-12 version, so data removed
 * from the docs remained public in Postman. Never treat a 409 as success.
 */
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Public identifiers — these are embedded in the "Run in Postman" badge URL
// (docs/api/introduction.mdx, src/pages/index.tsx). Keep them in sync there.
const COLLECTION_UID = "7002958-7b897b8f-b2aa-4bf7-ac12-a1e7afd78588";
const COLLECTION_ID = COLLECTION_UID.split("-").slice(1).join("-");
const API = "https://api.postman.com";

const TASK_TIMEOUT_MS = 45 * 60_000;
const TASK_INTERVAL_MS = 30_000;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const collectionPath = join(root, "static", "skuio-api.postman_collection.json");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fail(message) {
  console.error(`::error::publish-postman: ${message}`);
  process.exit(1);
}

async function call(apiKey, method, path, body, extraHeaders = {}) {
  const response = await fetch(`${API}${path}`, {
    method,
    headers: { "X-Api-Key": apiKey, "Content-Type": "application/json", ...extraHeaders },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    // keep the text for the error message
  }
  return { status: response.status, json, text, headers: response.headers };
}

/** Key an item by folder path, name, method and position among same-named siblings. */
function index(items, path = [], out = new Map()) {
  const seen = new Map();
  for (const item of items || []) {
    const base = `${path.join("/")}|${item.name}|${item.request ? item.request.method : "folder"}`;
    const n = seen.get(base) || 0;
    seen.set(base, n + 1);
    out.set(`${base}|${n}`, item);
    if (Array.isArray(item.item)) {
      index(item.item, [...path, item.name], out);
    }
  }
  return out;
}

/** Copy the live ids onto matching generated items and examples, so the replace updates in place. */
function carryIds(generated, live) {
  const liveIndex = index(live.item);
  let items = 0;
  let responses = 0;
  for (const [key, item] of index(generated.item)) {
    const old = liveIndex.get(key);
    if (!old || !old.id) {
      continue;
    }
    item.id = old.id;
    items += 1;
    const oldResponses = new Map();
    for (const r of old.response || []) {
      if (r.id && !oldResponses.has(r.name)) {
        oldResponses.set(r.name, r.id);
      }
    }
    const used = new Set();
    for (const r of item.response || []) {
      const id = oldResponses.get(r.name);
      if (id && !used.has(id)) {
        r.id = id;
        used.add(id);
        responses += 1;
      }
    }
  }
  return { items, responses };
}

function countRequests(items) {
  let count = 0;
  for (const item of items || []) {
    if (Array.isArray(item.item)) {
      count += countRequests(item.item);
    } else if (item.request) {
      count += 1;
    }
  }
  return count;
}

async function main() {
  const apiKey = process.env.POSTMAN_API_KEY;
  if (!apiKey) {
    console.log(
      "publish-postman: POSTMAN_API_KEY not set — skipping public-collection sync (expected on local builds, forks, and PRs)."
    );
    return;
  }

  if (!existsSync(collectionPath)) {
    fail(`${collectionPath} not found. It is generated by scripts/gen-postman-collection.mjs — run it before this step.`);
  }

  const collection = JSON.parse(readFileSync(collectionPath, "utf8"));
  const requestCount = countRequests(collection.item);

  const current = await call(apiKey, "GET", `/collections/${COLLECTION_UID}`);
  if (current.status !== 200 || !current.json?.collection) {
    fail(`could not read the live collection: ${current.status} ${current.text.slice(0, 300)}`);
  }
  const carried = carryIds(collection, current.json.collection);
  console.log(
    `publish-postman: carried ${carried.items} item ids and ${carried.responses} example ids from the live collection (${countRequests(current.json.collection.item)} requests live, ${requestCount} new).`
  );

  console.log(`publish-postman: replacing collection ${COLLECTION_UID} asynchronously…`);
  const put = await call(apiKey, "PUT", `/collections/${COLLECTION_ID}`, { collection }, { Prefer: "respond-async" });
  if (put.status === 409) {
    fail(
      `Postman refused the replace (409): ${put.text.slice(0, 300)}. A previous update holds the collection. If this repeats across deploys, the lock is stale: open a Postman support ticket with the collection UID.`
    );
  }
  if (put.status !== 202 && put.status !== 200) {
    fail(`PUT returned ${put.status}: ${put.text.slice(0, 500)}`);
  }

  const taskId = put.json?.task?.id || put.json?.taskId || put.json?.id || (put.headers.get("location") || "").split("/").pop();
  if (!taskId) {
    fail(`PUT returned ${put.status} without a task id: ${put.text.slice(0, 500)}`);
  }
  console.log(`publish-postman: task ${taskId} accepted (${put.status}); polling…`);

  const deadline = Date.now() + TASK_TIMEOUT_MS;
  while (Date.now() < deadline) {
    await sleep(TASK_INTERVAL_MS);
    const task = await call(apiKey, "GET", `/collection-updates-tasks/${taskId}`);
    const state = String(task.json?.task?.status || task.json?.status || "").toLowerCase();
    if (["successful", "success", "completed", "complete", "done"].includes(state)) {
      console.log(`publish-postman: task ${taskId} ${state}; ${requestCount} requests published.`);
      return;
    }
    if (["failed", "failure", "error", "errored"].includes(state) || task.status >= 400) {
      fail(`task ${taskId} ${state || task.status}: ${task.text.slice(0, 500)}`);
    }
    console.log(`publish-postman: task ${taskId} ${state || "pending"}…`);
  }
  fail(`task ${taskId} not finished after ${TASK_TIMEOUT_MS / 60_000} minutes.`);
}

main().catch((error) => fail(`unexpected error: ${error.stack || error.message}`));
