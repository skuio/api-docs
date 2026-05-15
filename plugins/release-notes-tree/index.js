// Indexes the Release Notes posts by date and exposes a flat, date-sorted
// list as plugin global data. The BlogSidebar override (src/theme/BlogSidebar)
// reads this to render the Year > Month > Week > Day drill-down tree.
//
// Posts are one-feature-per-file, named YYYY-MM-DD-<slug>.md, where the date
// prefix is the feature's production-ship day.

const fs = require("fs");
const path = require("path");

const POST_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.mdx?$/;

function parseFrontMatter(raw) {
  const fm = {};
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) {
    return fm;
  }
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (mm) {
      fm[mm[1]] = mm[2].trim().replace(/^["']|["']$/g, "");
    }
  }
  return fm;
}

module.exports = function releaseNotesTreePlugin(context, options) {
  const routeBasePath = (options && options.routeBasePath) || "release-notes";
  const postsDir = path.resolve(
    context.siteDir,
    (options && options.path) || "release-notes"
  );

  return {
    name: "release-notes-tree",

    async loadContent() {
      let files = [];
      try {
        files = fs.readdirSync(postsDir);
      } catch (e) {
        return [];
      }

      const posts = [];
      for (const file of files) {
        const fileMatch = file.match(POST_RE);
        if (!fileMatch) {
          continue;
        }
        const [, fy, fmo, fd, slugPart] = fileMatch;
        const fm = parseFrontMatter(
          fs.readFileSync(path.join(postsDir, file), "utf8")
        );

        // Front-matter date wins; fall back to the filename date prefix.
        const date =
          fm.date && /^\d{4}-\d{2}-\d{2}/.test(fm.date)
            ? fm.date.slice(0, 10)
            : `${fy}-${fmo}-${fd}`;
        const [y, mo, d] = date.split("-");

        posts.push({
          title: fm.title || slugPart.replace(/-/g, " "),
          date,
          // Docusaurus blog default permalink: /<base>/YYYY/MM/DD/<slug>
          permalink: `/${routeBasePath}/${y}/${mo}/${d}/${slugPart}`,
        });
      }

      // Newest first.
      posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
      return posts;
    },

    contentLoaded({ content, actions }) {
      actions.setGlobalData({ posts: content });
    },
  };
};
