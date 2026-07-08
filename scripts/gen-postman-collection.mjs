/**
 * Build-time generator for static/skuio-api.postman_collection.json.
 *
 * Reads the merged spec (openapi.yaml, kept current by the skuio/sku publish
 * pipeline) and emits an importable Postman Collection v2.1 — the same surface
 * developer.sku.io renders, one folder per x-tagGroup → tag. Chained ahead of
 * `docusaurus build` (alongside gen-scope-index / gen-rate-limit) so the file
 * exists as a static asset before the broken-link check runs and before
 * static/ is copied into the build output.
 *
 * The output is gitignored: at ~8 MB it is fully derived from openapi.yaml, so
 * committing it would only add large-file churn on every API change. CI
 * regenerates it here on every build.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { specToPostmanCollection } from "./openapi-to-postman.mjs";

const requireCjs = createRequire(import.meta.url);
const yaml = requireCjs("js-yaml");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = join(root, "openapi.yaml");
const outDir = join(root, "static");
const outFile = join(outDir, "skuio-api.postman_collection.json");

function emptyCollection() {
  return {
    info: {
      name: "SKU.io API",
      description:
        "openapi.yaml was not found at build time — run `docusaurus gen-api-docs all` / the publish pipeline first.",
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    },
    item: [],
  };
}

function countRequests(items) {
  let n = 0;
  for (const it of items) {
    if (it.request) {
      n += 1;
    }
    if (Array.isArray(it.item)) {
      n += countRequests(it.item);
    }
  }
  return n;
}

function main() {
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  if (!existsSync(specPath)) {
    console.warn(
      "[gen-postman-collection] openapi.yaml missing — writing empty collection"
    );
    writeFileSync(outFile, JSON.stringify(emptyCollection()));
    return;
  }
  const spec = yaml.load(readFileSync(specPath, "utf8"));
  const collection = specToPostmanCollection(spec);
  const json = JSON.stringify(collection);
  writeFileSync(outFile, json);
  const requests = countRequests(collection.item);
  const mb = (Buffer.byteLength(json) / 1024 / 1024).toFixed(1);
  console.log(
    `[gen-postman-collection] ${requests} requests → static/skuio-api.postman_collection.json (${mb} MB)`
  );
}

main();
