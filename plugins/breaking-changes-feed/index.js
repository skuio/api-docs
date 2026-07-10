/**
 * Breaking-only changelog feed.
 *
 * The API Changelog blog instance already publishes a full RSS/Atom/JSON feed
 * (every addition, change, deprecation, and removal). Most integrators do not
 * want that firehose — they want to be paged ONLY when something will break
 * their integration. This plugin emits a second, breaking-only feed alongside
 * it so they can subscribe to just the action-required changes:
 *
 *   /changelog/breaking/rss.xml
 *   /changelog/breaking/atom.xml
 *   /changelog/breaking/feed.json
 *
 * A post is "breaking" when its frontmatter `tags` include `breaking` — the tag
 * the api-changelog-diff.py generator adds whenever a release removes an
 * endpoint or tightens a request requirement.
 *
 * Feed items are built from the changelog source markdown (not the rendered
 * site) so this stays decoupled from Docusaurus internals: it parses the
 * frontmatter we own and derives each permalink the same way the blog plugin
 * does — {routeBasePath}/YYYY/MM/DD/{slug-from-filename}. Each item carries the
 * post summary (`description`) plus the full post body rendered to HTML
 * (`content`), so an RSS-to-email tool can deliver the whole changelog entry,
 * not just a headline. An empty (but valid) feed is still written when nothing
 * is breaking, so the URL never 404s.
 */
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { Feed } = require("feed");

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const DATED_FILENAME = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.mdx?$/;

/**
 * Split a changelog markdown file into parsed frontmatter and the body text.
 *
 * @returns {{data: object, body: string} | null}
 */
function splitPost(raw) {
  const match = raw.match(FRONTMATTER);
  if (!match) {
    return null;
  }
  try {
    const data = yaml.load(match[1]);
    if (!data || typeof data !== "object") {
      return null;
    }
    return { data, body: raw.slice(match[0].length) };
  } catch {
    return null;
  }
}

function isBreaking(frontmatter) {
  const tags = frontmatter.tags;
  return Array.isArray(tags) && tags.map(String).includes("breaking");
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Render the inline markdown the generator emits — links, bold, and inline
 * code — to HTML. Root-relative links are made absolute so they resolve inside
 * an email client, which has no site origin. Text is HTML-escaped first; the
 * markdown markers themselves are ASCII and survive escaping.
 */
function renderInline(text, siteUrl) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url) => {
      const href = url.startsWith("/") ? `${siteUrl}${url}` : url;
      return `<a href="${href}">${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

/**
 * Convert a changelog post body to HTML for the feed's `content:encoded`.
 *
 * Deliberately covers only the constrained markdown the generator produces —
 * headings (##–####), admonitions, single-line blockquotes, one-level-nested
 * bullet lists, italic footers, and inline emphasis/code/links. Unknown lines
 * fall through as paragraph text, so an unexpected construct degrades to plain
 * prose rather than breaking the feed.
 */
function renderBody(body, siteUrl) {
  const html = [];
  let paragraph = [];
  let list = { top: false, li: false, sub: false };

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${renderInline(paragraph.join(" "), siteUrl)}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (list.sub) {
      html.push("</ul>");
    }
    if (list.li) {
      html.push("</li>");
    }
    if (list.top) {
      html.push("</ul>");
    }
    list = { top: false, li: false, sub: false };
  };
  const flushBlocks = () => {
    flushParagraph();
    closeList();
  };
  const addListItem = (level, content) => {
    flushParagraph();
    if (!list.top) {
      html.push("<ul>");
      list.top = true;
    }
    if (level === 1) {
      if (list.sub) {
        html.push("</ul>");
        list.sub = false;
      }
      if (list.li) {
        html.push("</li>");
      }
      html.push(`<li>${content}`);
      list.li = true;
    } else {
      if (!list.li) {
        html.push("<li>");
        list.li = true;
      }
      if (!list.sub) {
        html.push("<ul>");
        list.sub = true;
      }
      html.push(`<li>${content}</li>`);
    }
  };

  for (const raw of body.split(/\r?\n/)) {
    const line = raw.replace(/\s+$/, "");

    if (line.includes("<!-- truncate -->")) {
      continue;
    }
    if (line === "") {
      flushBlocks();
      continue;
    }

    if (line === ":::") {
      flushBlocks();
      html.push("</blockquote>");
      continue;
    }
    const admonition = line.match(/^:::(\w+)(?:\s+(.*))?$/);
    if (admonition) {
      flushBlocks();
      html.push("<blockquote>");
      if (admonition[2]) {
        html.push(`<p><strong>${renderInline(admonition[2], siteUrl)}</strong></p>`);
      }
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.*)$/);
    if (heading) {
      flushBlocks();
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2], siteUrl)}</h${level}>`);
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushBlocks();
      html.push(`<blockquote><p>${renderInline(quote[1], siteUrl)}</p></blockquote>`);
      continue;
    }

    const bullet = line.match(/^(\s*)-\s+(.*)$/);
    if (bullet) {
      const level = bullet[1].length >= 2 ? 2 : 1;
      addListItem(level, renderInline(bullet[2], siteUrl));
      continue;
    }

    const italicOnly = line.match(/^_(.+)_$/);
    if (italicOnly) {
      flushBlocks();
      html.push(`<p><em>${renderInline(italicOnly[1], siteUrl)}</em></p>`);
      continue;
    }

    paragraph.push(line);
  }

  flushBlocks();
  return html.join("");
}

/**
 * Collect breaking changelog posts as feed-ready descriptors, newest first.
 * Mirrors the Docusaurus blog permalink: a file `YYYY-MM-DD-<slug>.md` with no
 * explicit `slug` frontmatter is served at `<base>/YYYY/MM/DD/<slug>`.
 */
function collectBreakingPosts(sourceDir, routeBasePath, siteUrl) {
  if (!fs.existsSync(sourceDir)) {
    return [];
  }

  const posts = [];
  for (const file of fs.readdirSync(sourceDir)) {
    const named = file.match(DATED_FILENAME);
    if (!named) {
      continue;
    }

    const parsed = splitPost(fs.readFileSync(path.join(sourceDir, file), "utf8"));
    if (!parsed || !isBreaking(parsed.data)) {
      continue;
    }

    const [, year, month, day, filenameSlug] = named;
    const { data, body } = parsed;
    const slug =
      typeof data.slug === "string" && data.slug.trim()
        ? data.slug.replace(/^\/+/, "")
        : filenameSlug;
    const permalink = `${siteUrl}/${routeBasePath}/${year}/${month}/${day}/${slug}`;

    posts.push({
      title: String(data.title || `API changes — ${year}-${month}-${day}`),
      description: String(data.description || "").trim(),
      content: renderBody(body, siteUrl),
      link: permalink,
      date: new Date(`${year}-${month}-${day}T00:00:00Z`),
    });
  }

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

module.exports = function breakingChangesFeedPlugin(_context, options = {}) {
  const sourcePath = options.path || "changelog";
  const routeBasePath = (options.routeBasePath || "changelog").replace(
    /^\/+|\/+$/g,
    ""
  );

  return {
    name: "breaking-changes-feed",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "alternate",
              type: "application/rss+xml",
              title: "SKU.io API — Breaking changes",
              href: `/${routeBasePath}/breaking/rss.xml`,
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "alternate",
              type: "application/atom+xml",
              title: "SKU.io API — Breaking changes",
              href: `/${routeBasePath}/breaking/atom.xml`,
            },
          },
        ],
      };
    },

    async postBuild({ siteConfig, outDir }) {
      const siteUrl = String(siteConfig.url || "").replace(/\/+$/, "");
      const sourceDir = path.resolve(__dirname, "../..", sourcePath);
      const posts = collectBreakingPosts(sourceDir, routeBasePath, siteUrl);

      const changelogUrl = `${siteUrl}/${routeBasePath}`;
      const feedBase = `${changelogUrl}/breaking`;
      const feed = new Feed({
        title: "SKU.io API — Breaking changes",
        description:
          "Action-required API changes only: removed endpoints and tightened request requirements. Subscribe to be paged before something breaks your integration.",
        id: feedBase,
        link: changelogUrl,
        language: "en",
        copyright: `Copyright © ${new Date().getUTCFullYear()} SKU.io.`,
        updated: posts[0]?.date,
        feedLinks: {
          rss: `${feedBase}/rss.xml`,
          atom: `${feedBase}/atom.xml`,
          json: `${feedBase}/feed.json`,
        },
      });

      for (const post of posts) {
        feed.addItem({
          title: post.title,
          id: post.link,
          link: post.link,
          description: post.description,
          content: post.content,
          date: post.date,
        });
      }

      const outputDir = path.join(outDir, routeBasePath, "breaking");
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, "rss.xml"), feed.rss2());
      fs.writeFileSync(path.join(outputDir, "atom.xml"), feed.atom1());
      fs.writeFileSync(path.join(outputDir, "feed.json"), feed.json1());

      console.log(
        `[breaking-changes-feed] wrote ${posts.length} breaking post(s) to /${routeBasePath}/breaking/{rss.xml,atom.xml,feed.json}`
      );
    },
  };
};
