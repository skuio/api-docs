/**
 * Publishes the merged OpenAPI spec as downloadable static assets:
 *
 *   /openapi.yaml           — the full merged spec (repo root copy, kept
 *                             current by the skuio/sku publish workflow)
 *   /openapi/index.json     — machine-readable catalog: every tag with its
 *                             chunk URL, group, and operation count
 *   /openapi/<tag>.yaml     — per-tag spec chunk (NetSuite-style subsetting:
 *                             agents fetch one domain instead of 6 MB)
 *
 * Also re-copies the hand-curated static/llms.txt into the build output
 * LAST, because @signalwire/docusaurus-plugin-llms-txt (registered earlier)
 * may emit its own generated llms.txt during postBuild.
 */
const fs = require("fs");
const path = require("path");

function slugify(tag) {
  return tag
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = function publishOpenapiPlugin() {
  return {
    name: "publish-openapi",
    async postBuild({ outDir }) {
      const root = path.resolve(__dirname, "../..");
      const specPath = path.join(root, "openapi.yaml");
      if (!fs.existsSync(specPath)) {
        console.warn("[publish-openapi] openapi.yaml not found — skipping");
        return;
      }

      fs.copyFileSync(specPath, path.join(outDir, "openapi.yaml"));

      // ---- per-tag chunks -------------------------------------------------
      const yaml = require("js-yaml");
      const spec = yaml.load(fs.readFileSync(specPath, "utf8"));
      const chunkDir = path.join(outDir, "openapi");
      fs.mkdirSync(chunkDir, { recursive: true });

      const tagToGroup = new Map();
      for (const group of spec["x-tagGroups"] ?? []) {
        for (const tag of group.tags ?? []) tagToGroup.set(tag, group.name);
      }

      // bucket paths by (first) tag
      const byTag = new Map();
      for (const [p, methods] of Object.entries(spec.paths ?? {})) {
        for (const [method, op] of Object.entries(methods)) {
          if (!op || typeof op !== "object" || !Array.isArray(op.tags)) continue;
          const tag = op.tags[0] ?? "Untagged";
          if (!byTag.has(tag)) byTag.set(tag, {});
          const bucket = byTag.get(tag);
          if (!bucket[p]) bucket[p] = {};
          bucket[p][method] = op;
        }
      }

      const index = [];
      for (const [tag, paths] of [...byTag.entries()].sort()) {
        const slug = slugify(tag);
        const opCount = Object.values(paths).reduce(
          (n, m) => n + Object.keys(m).length,
          0
        );
        const chunk = {
          openapi: spec.openapi,
          info: {
            ...spec.info,
            title: `SKU.io API — ${tag}`,
            description: `The ${tag} subset of the SKU.io API. Full spec: https://developer.sku.io/openapi.yaml`,
          },
          servers: spec.servers,
          components: spec.components,
          security: spec.security,
          tags: [{ name: tag }],
          paths,
        };
        fs.writeFileSync(
          path.join(chunkDir, `${slug}.yaml`),
          yaml.dump(chunk, { noRefs: true, lineWidth: -1 })
        );
        index.push({
          tag,
          group: tagToGroup.get(tag) ?? null,
          operations: opCount,
          url: `https://developer.sku.io/openapi/${slug}.yaml`,
        });
      }
      fs.writeFileSync(
        path.join(chunkDir, "index.json"),
        JSON.stringify(
          {
            description:
              "Per-domain chunks of the SKU.io OpenAPI spec. Fetch a chunk instead of the full 6 MB spec.",
            full_spec: "https://developer.sku.io/openapi.yaml",
            generated_from: spec.info?.version ?? null,
            tags: index,
          },
          null,
          2
        )
      );
      console.log(
        `[publish-openapi] copied openapi.yaml + wrote ${index.length} per-tag chunks to /openapi/`
      );

      // ---- keep the curated llms.txt --------------------------------------
      const curated = path.join(root, "static", "llms.txt");
      if (fs.existsSync(curated)) {
        fs.copyFileSync(curated, path.join(outDir, "llms.txt"));
        console.log("[publish-openapi] restored hand-curated llms.txt");
      }
    },
  };
};
