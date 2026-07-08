/**
 * Build-time generator for static/rate-limit-index.json.
 *
 * Every SKU.io API request passes through the `api` middleware group, which
 * applies Laravel's `throttle:1000,1` — a platform-wide default of 1,000
 * requests/minute per token+IP. A small, enumerable set of heavier routes layer
 * a *tighter* per-route `throttle:N,M` on top (e.g. the pro-forma Amazon-fee
 * estimator is `throttle:30,1`). The effective ceiling for a route is the most
 * restrictive limit that applies to it.
 *
 * This generator emits a compact lookup the PageActions rate-limit badge fetches
 * once: a `_default` (1,000/min) plus one entry per overridden endpoint, keyed by
 * the page slug (frontmatter `id`, == the operation page's last path segment).
 *
 * The override table below is transcribed by hand from the sku3 route files and
 * middleware — it is NOT derivable from the OpenAPI blob (throttle middleware
 * doesn't surface into the spec). Each entry is verified against the generated
 * `docs/api/*.api.mdx` at build time by matching HTTP method + normalized path;
 * matched/unmatched overrides are logged so a route rename can't silently rot the
 * table. Paths use `{}` for every path parameter (param names differ between the
 * Laravel route and the doc slug, so they're normalized away).
 *
 * Sources (sku3 repo):
 *   - app/Http/Kernel.php / bootstrap/app.php  → `api` group `throttle:1000,1`
 *   - routes/api.php, routes/api/3pl.php, routes/api/channel.php
 *   - Modules/Stripe/Routes/api.php, Modules/Shopify/Routes/api.php
 *   - app/Http/Middleware/ThrottleRequestsChannel.php / ThrottleRequests3pl.php
 *     (custom key only; standard "N requests per M minutes" semantics preserved)
 *
 * Chained ahead of `docusaurus build` in package.json, alongside gen-scope-index.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { inflateSync } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = join(root, "docs", "api");
const outDir = join(root, "static");
const outFile = join(outDir, "rate-limit-index.json");

const API_RE = /^api: (.+)$/m;
const ID_RE = /^id: (.+)$/m;

// Platform-wide default applied by the `api` middleware group (throttle:1000,1).
const DEFAULT_LIMITS = [{ n: 1000, w: "minute" }];

/**
 * Per-route overrides that layer a tighter throttle on top of the 1,000/min
 * default. `path` is the operation path with every {param} normalized to `{}`.
 * `limits` lists every throttle that stacks on the route (excluding the always-
 * present 1,000/min default, which never binds where an override exists).
 */
const OVERRIDES = [
  // ── Plain throttle:N,1 on documented PAT endpoints ──────────────────────
  { method: "POST", path: "/api/purchase-orders/{}/request-invoice", limits: [{ n: 60, w: "minute" }] }, // routes/api.php request-invoice
  { method: "POST", path: "/api/vendor-deposits/{}/send-remittance", limits: [{ n: 60, w: "minute" }] }, // routes/api.php vendor-deposits
  { method: "POST", path: "/api/vendor-deposits/{}/scan-proof", limits: [{ n: 40, w: "minute" }] },
  { method: "POST", path: "/api/v2/pro-forma/amazon-fees", limits: [{ n: 30, w: "minute" }] }, // throttle:30,1,pro-forma-amazon-fees
  { method: "POST", path: "/api/suppliers/{}/request-invoices", limits: [{ n: 60, w: "minute" }] },

  // ── Stripe module (Modules/Stripe/Routes/api.php, prefix `stripe`) ──────
  { method: "POST", path: "/api/stripe/invoices", limits: [{ n: 30, w: "minute" }] },
  { method: "POST", path: "/api/stripe/invoices/{}/refunds", limits: [{ n: 20, w: "minute" }] },

  // ── Shopify install claim (Modules/Shopify/Routes/api.php, throttle:30,1) ─
  { method: "GET", path: "/api/shopify/install/{}", limits: [{ n: 30, w: "minute" }] },
  { method: "POST", path: "/api/shopify/install/{}/claim", limits: [{ n: 30, w: "minute" }] },

  // ── 3PL partner API (routes/api/3pl.php, throttle:120,60 = 120/hour) ─────
  { method: "GET", path: "/api/3pl/products", limits: [{ n: 120, w: "hour" }] },
  { method: "GET", path: "/api/3pl/asns", limits: [{ n: 120, w: "hour" }] },
  { method: "POST", path: "/api/3pl/asns/receipt", limits: [{ n: 120, w: "hour" }] },
  { method: "GET", path: "/api/3pl/orders", limits: [{ n: 120, w: "hour" }] },
  { method: "POST", path: "/api/3pl/orders/{}/fulfill", limits: [{ n: 120, w: "hour" }] },
  { method: "POST", path: "/api/3pl/orders/{}/acknowledge", limits: [{ n: 120, w: "hour" }] },
  { method: "POST", path: "/api/3pl/inventory-adjustments", limits: [{ n: 120, w: "hour" }] },

  // ── Sales-channel partner API (routes/api/channel.php) ──────────────────
  // Group throttle.channel:60,1 (60/min) + inner throttle:2000,60 (reads) or
  // throttle:500,60 (orders). Both stack; the generator sorts most-restrictive first.
  { method: "POST", path: "/api/channel/tokens", limits: [{ n: 60, w: "minute" }] },
  { method: "GET", path: "/api/channel/products", limits: [{ n: 60, w: "minute" }, { n: 2000, w: "hour" }] },
  { method: "GET", path: "/api/channel/products/{}", limits: [{ n: 60, w: "minute" }, { n: 2000, w: "hour" }] },
  { method: "GET", path: "/api/channel/inventory", limits: [{ n: 60, w: "minute" }, { n: 2000, w: "hour" }] },
  { method: "GET", path: "/api/channel/customers", limits: [{ n: 60, w: "minute" }, { n: 2000, w: "hour" }] },
  { method: "GET", path: "/api/channel/customers/{}", limits: [{ n: 60, w: "minute" }, { n: 2000, w: "hour" }] },
  { method: "GET", path: "/api/channel/orders", limits: [{ n: 60, w: "minute" }, { n: 500, w: "hour" }] },
  { method: "POST", path: "/api/channel/orders", limits: [{ n: 60, w: "minute" }, { n: 500, w: "hour" }] },
  { method: "GET", path: "/api/channel/orders/{}", limits: [{ n: 60, w: "minute" }, { n: 500, w: "hour" }] },
  { method: "PUT", path: "/api/channel/orders/{}", limits: [{ n: 60, w: "minute" }, { n: 500, w: "hour" }] },
];

const WINDOW_SECONDS = { second: 1, minute: 60, hour: 3600, day: 86400 };

// Requests-per-second — smaller is more restrictive.
function ratePerSecond(limit) {
  return limit.n / (WINDOW_SECONDS[limit.w] ?? 60);
}

// Most-restrictive limit first, so the badge headline is limits[0].
function sortLimits(limits) {
  return [...limits].sort((a, b) => ratePerSecond(a) - ratePerSecond(b));
}

function normalizePath(path) {
  return path.replace(/\{[^}]*\}/g, "{}").replace(/\/+$/, "");
}

function decodeOperation(raw) {
  const b64 = raw.trim().replace(/^"|"$/g, "");
  return JSON.parse(inflateSync(Buffer.from(b64, "base64")).toString("utf8"));
}

function main() {
  if (!existsSync(apiDir)) {
    console.warn(`[gen-rate-limit-index] ${apiDir} missing — run \`docusaurus gen-api-docs all\` first. Writing default-only index.`);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }
    writeFileSync(outFile, JSON.stringify({ _default: { limits: DEFAULT_LIMITS } }) + "\n");
    return;
  }

  // Build METHOD /normalized-path → [slug, ...] from every generated operation.
  const routeToSlugs = new Map();
  const files = readdirSync(apiDir).filter((f) => f.endsWith(".api.mdx"));
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
    if (typeof op.method !== "string" || typeof op.path !== "string") {
      continue;
    }
    const key = `${op.method.toUpperCase()} ${normalizePath(op.path)}`;
    if (!routeToSlugs.has(key)) {
      routeToSlugs.set(key, []);
    }
    routeToSlugs.get(key).push(id);
  }

  const index = { _default: { limits: DEFAULT_LIMITS } };
  const matched = [];
  const unmatched = [];

  for (const ov of OVERRIDES) {
    const key = `${ov.method.toUpperCase()} ${normalizePath(ov.path)}`;
    const slugs = routeToSlugs.get(key);
    if (!slugs || slugs.length === 0) {
      unmatched.push(key);
      continue;
    }
    const limits = sortLimits(ov.limits);
    for (const slug of slugs) {
      index[slug] = { limits };
      matched.push(`${key} → ${slug} (${limits.map((l) => `${l.n}/${l.w}`).join(" & ")})`);
    }
  }

  // Stable key order (default first, then sorted slugs) for spurious-diff-free output.
  const sorted = { _default: index._default };
  for (const k of Object.keys(index).filter((k) => k !== "_default").sort()) {
    sorted[k] = index[k];
  }

  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(outFile, JSON.stringify(sorted) + "\n");

  console.log(
    `[gen-rate-limit-index] ${matched.length} override(s) matched / ${OVERRIDES.length} defined; ` +
      `${files.length} endpoints scanned${unreadable ? ` (${unreadable} unreadable)` : ""} → static/rate-limit-index.json`
  );
  for (const m of matched) {
    console.log(`  ✓ ${m}`);
  }
  if (unmatched.length > 0) {
    console.warn(`[gen-rate-limit-index] ${unmatched.length} override(s) did NOT match any documented endpoint (route renamed or undocumented):`);
    for (const u of unmatched) {
      console.warn(`  ✗ ${u}`);
    }
  }
}

main();
