/**
 * Post-build shrink of the client-side search index.
 *
 * `@easyops-cn/docusaurus-search-local` emits, per search context, an array of
 * sub-indexes. Across 4,200+ generated API-reference pages the *content*
 * sub-index (full paragraph/parameter-description text) dominates: ~34 MB of a
 * ~38 MB index, i.e. a 6.5 MB gzipped first-search download plus the cost of
 * parsing 38 MB of JSON into Lunr on the main thread. Titles, headings and
 * summaries — the search surface that actually matters for an API reference —
 * are only ~4.6 MB combined.
 *
 * This rewrites each `build/search-index*.json` in place, capping every indexed
 * document's searchable text (`t`) to CAP characters and rebuilding that
 * sub-index's Lunr index with the EXACT config the plugin uses (ref `i`, field
 * `t`, `metadataWhitelist:["position"]`, plain English pipeline — see
 * node_modules/@easyops-cn/docusaurus-search-local/dist/server/server/utils/buildIndex.js).
 * Short docs (titles/headings) are unaffected by the cap; long content docs
 * shrink dramatically while keeping first-sentence body search intact.
 *
 * Byte-compatible with the runtime because it reuses the same bundled Lunr
 * (2.3.9) and the same builder options — the plugin's own empty sub-index #3
 * already proves the runtime tolerates rebuilt/empty sub-indexes.
 *
 * Chained after `docusaurus build` in package.json (before finalize-build).
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const requireCjs = createRequire(import.meta.url);
const lunr = requireCjs("lunr");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = process.argv[2] ? process.argv[2] : join(root, "build");

// Max characters of a document's searchable text to index. Titles and headings
// are far shorter than this; only long body paragraphs are truncated. 160 keeps
// the endpoint description's first sentence(s) searchable. The runtime needs the
// `position` match metadata (highlightStemmed throws without it), so we keep it —
// capping the source text is what bounds the position payload.
const CAP = Number(process.env.TRIM_CAP) > 0 ? Number(process.env.TRIM_CAP) : 160;

function rebuildSubIndex(sub) {
  const documents = Array.isArray(sub.documents) ? sub.documents : [];
  let capped = 0;
  for (const doc of documents) {
    if (typeof doc.t === "string" && doc.t.length > CAP) {
      doc.t = doc.t.slice(0, CAP);
      capped += 1;
    }
  }
  const index = lunr(function () {
    this.ref("i");
    this.field("t");
    this.metadataWhitelist = ["position"];
    for (const doc of documents) {
      this.add({ ...doc, i: String(doc.i) });
    }
  });
  return { rebuilt: { documents, index }, capped };
}

function fmt(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function main() {
  const files = readdirSync(buildDir).filter(
    (f) => /^search-index.*\.json$/.test(f)
  );
  if (files.length === 0) {
    console.warn(`[trim-search-index] no search-index*.json in ${buildDir} — skipping`);
    return;
  }
  let beforeTotal = 0;
  let afterTotal = 0;
  for (const file of files) {
    const path = join(buildDir, file);
    const before = statSync(path).size;
    const data = JSON.parse(readFileSync(path, "utf8"));
    if (!Array.isArray(data)) {
      continue;
    }
    let cappedDocs = 0;
    const out = data.map((sub) => {
      if (sub && Array.isArray(sub.documents) && sub.documents.length > 0) {
        const { rebuilt, capped } = rebuildSubIndex(sub);
        cappedDocs += capped;
        return rebuilt;
      }
      return sub;
    });
    writeFileSync(path, JSON.stringify(out));
    const after = statSync(path).size;
    beforeTotal += before;
    afterTotal += after;
    console.log(
      `[trim-search-index] ${file}: ${fmt(before)} → ${fmt(after)} ` +
        `(${cappedDocs.toLocaleString()} docs capped at ${CAP} chars)`
    );
  }
  const pct = beforeTotal ? Math.round((1 - afterTotal / beforeTotal) * 100) : 0;
  console.log(
    `[trim-search-index] total ${fmt(beforeTotal)} → ${fmt(afterTotal)} (−${pct}%)`
  );
}

main();
