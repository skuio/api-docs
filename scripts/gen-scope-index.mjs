/**
 * Build-time generator for static/scope-index.json.
 *
 * Every generated API page (docs/api/*.api.mdx) carries a base64 zlib-compressed
 * `api:` frontmatter blob — the same operation object the OpenAPI theme inflates
 * client-side. That blob includes the `x-required-scope` extension emitted by the
 * skuio/sku publish pipeline (merge-openapi.py), e.g. "purchase-orders:write".
 *
 * Shipping a zlib decompressor to the browser just to read one string per page
 * would be wasteful, so we inflate the blobs here (Node has zlib built in) and
 * emit a small lookup keyed by the page slug (frontmatter `id`, which is also the
 * last path segment of the route). The PageActions permission badge fetches this
 * once and renders "Requires <scope>" or "Public" per endpoint.
 *
 * Chained ahead of `docusaurus build` in package.json, so it runs after CI's
 * `docusaurus gen-api-docs all` regenerates the mdx and before static/ is copied.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { inflateSync } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = join(root, "docs", "api");
const outDir = join(root, "static");
const outFile = join(outDir, "scope-index.json");

const API_RE = /^api: (.+)$/m;
const ID_RE = /^id: (.+)$/m;

function decodeOperation(raw) {
  const b64 = raw.trim().replace(/^"|"$/g, "");
  return JSON.parse(inflateSync(Buffer.from(b64, "base64")).toString("utf8"));
}

function main() {
  if (!existsSync(apiDir)) {
    console.warn(`[gen-scope-index] ${apiDir} missing — run \`docusaurus gen-api-docs all\` first. Writing empty index.`);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }
    writeFileSync(outFile, "{}\n");
    return;
  }

  const files = readdirSync(apiDir).filter((f) => f.endsWith(".api.mdx"));
  const index = {};
  let scoped = 0;
  let unreadable = 0;

  for (const file of files) {
    const text = readFileSync(join(apiDir, file), "utf8");
    const apiMatch = API_RE.exec(text);
    const idMatch = ID_RE.exec(text);
    if (!apiMatch || !idMatch) {
      continue;
    }
    const id = idMatch[1].trim().replace(/^"|"$/g, "");
    let op;
    try {
      op = decodeOperation(apiMatch[1]);
    } catch {
      unreadable += 1;
      continue;
    }
    const scope = op["x-required-scope"];
    if (typeof scope === "string" && scope.length > 0) {
      index[id] = scope;
      scoped += 1;
    }
  }

  // Sort keys so the emitted file is stable across builds (no spurious diffs).
  const sorted = Object.fromEntries(Object.keys(index).sort().map((k) => [k, index[k]]));
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(outFile, JSON.stringify(sorted) + "\n");
  console.log(`[gen-scope-index] ${scoped} scoped / ${files.length} endpoints → static/scope-index.json${unreadable ? ` (${unreadable} unreadable)` : ""}`);
}

main();
