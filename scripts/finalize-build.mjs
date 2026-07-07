/**
 * Post-build finalizer, chained after `docusaurus build` in package.json.
 *
 * Restores the hand-curated static/llms.txt over the auto-generated one from
 * @signalwire/docusaurus-plugin-llms-txt — plugin postBuild ordering is not
 * controllable, and the curated file (with its agent-instructions section)
 * must win at /llms.txt. Exhaustive machine discovery is served by
 * /openapi/index.json and /sitemap.xml instead of a 3,400-line link dump.
 */
import { copyFileSync, existsSync } from "fs";

const curated = new URL("../static/llms.txt", import.meta.url).pathname;
const out = new URL("../build/llms.txt", import.meta.url).pathname;

if (existsSync(curated) && existsSync(new URL("../build", import.meta.url).pathname)) {
  copyFileSync(curated, out);
  console.log("[finalize-build] restored hand-curated llms.txt");
}
