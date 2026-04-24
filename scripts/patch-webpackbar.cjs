/**
 * Patch webpackbar 6.x inside @docusaurus/bundler to fix a compatibility issue
 * with webpack 5's ProgressPlugin schema validation.
 *
 * webpackbar extends webpack's ProgressPlugin but passes its own options
 * (name, color, reporters, reporter) to the parent class, which fails
 * webpack's strict schema validation. This patch temporarily swaps out the
 * options during super.apply() so validation passes.
 *
 * Issue: https://github.com/unjs/webpackbar/issues/xxx
 */

const fs = require("fs");
const path = require("path");

const PATCH_MARKER = "// [patched: webpackbar-apply-fix]";

const FILES = [
  path.resolve(
    __dirname,
    "../node_modules/@docusaurus/bundler/node_modules/webpackbar/dist/index.mjs"
  ),
  path.resolve(
    __dirname,
    "../node_modules/@docusaurus/bundler/node_modules/webpackbar/dist/index.cjs"
  ),
];

// Two variants: unpatched original, or previously-patched (different wording)
const OLD_APPLY_VARIANTS = [
  `  apply(compiler) {\n    if (compiler.webpackbar) {\n      return;\n    }\n    compiler.webpackbar = this;\n    super.apply(compiler);`,
  `  apply(compiler) {\n    if (compiler.webpackbar) {\n      return;\n    }\n    compiler.webpackbar = this;\n    // Temporarily restore the parent ProgressPlugin options so webpack's schema\n    // validation doesn't reject webpackbar-specific fields (name, color, etc.)\n    const _webpackbarOptions = this.options;\n    this.options = { activeModules: true };\n    super.apply(compiler);\n    this.options = _webpackbarOptions;`,
];

const NEW_APPLY = `  apply(compiler) {
    if (compiler.webpackbar) {
      return;
    }
    compiler.webpackbar = this;
    ${PATCH_MARKER}
    const _webpackbarOpts = this.options;
    this.options = { activeModules: true };
    super.apply(compiler);
    this.options = _webpackbarOpts;`;

for (const file of FILES) {
  if (!fs.existsSync(file)) {
    console.log(`  skipping (not found): ${file}`);
    continue;
  }

  let content = fs.readFileSync(file, "utf8");

  if (content.includes(PATCH_MARKER)) {
    console.log(`  already patched: ${path.basename(file)}`);
    continue;
  }

  const matchedVariant = OLD_APPLY_VARIANTS.find((v) => content.includes(v));
  if (!matchedVariant) {
    console.log(`  pattern not found (may have changed): ${path.basename(file)}`);
    continue;
  }

  content = content.replace(matchedVariant, NEW_APPLY);
  fs.writeFileSync(file, content, "utf8");
  console.log(`  patched: ${path.relative(path.resolve(__dirname, ".."), file)}`);
}

console.log("webpackbar patch complete.");
