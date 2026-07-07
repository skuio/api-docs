/**
 * Publishes the merged OpenAPI spec as a downloadable static asset.
 *
 * The spec lives at the repo root (updated by the skuio/sku publish
 * workflow), so a static/ copy would go stale — copy it into the build
 * output instead. Serves at https://developer.sku.io/openapi.yaml.
 */
const fs = require("fs");
const path = require("path");

module.exports = function publishOpenapiPlugin() {
  return {
    name: "publish-openapi",
    async postBuild({ outDir }) {
      const src = path.resolve(__dirname, "../../openapi.yaml");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(outDir, "openapi.yaml"));
        console.log("[publish-openapi] copied openapi.yaml into build output");
      } else {
        console.warn("[publish-openapi] openapi.yaml not found — skipping");
      }
    },
  };
};
