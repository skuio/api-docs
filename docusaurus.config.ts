import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as fs from "fs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const currentYear = new Date().getFullYear();

// Counted at build time from the merged spec so the landing page never drifts
// from reality (it was previously hardcoded and stale). Operations are the
// `operationId:` lines emitted by merge-openapi.py at 6-space indent.
const apiOperationCount = (() => {
  try {
    const spec = fs.readFileSync("./openapi.yaml", "utf8");
    return (spec.match(/^ {6}operationId:/gm) || []).length;
  } catch {
    return 0;
  }
})();

const config: Config = {
  title: "SKU.io Docs",
  tagline: "API reference, release notes, and changelog for the SKU.io platform",
  favicon: "img/favicon.ico",

  url: "https://developer.sku.io",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "skuio",
  projectName: "api-docs",

  customFields: {
    apiOperationCount,
  },

  // Branded apple-touch-icon (iOS home-screen / bookmark). The standard
  // favicon is wired via `favicon` above; OG/Twitter card via themeConfig.image.
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-touch-icon.png",
      },
    },
  ],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          sidebarCollapsible: true,
        },
        // The two blog-based feeds (Release Notes + API Changelog) are
        // configured as standalone plugin instances below.
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Click-to-zoom (lightbox) for every image across the docs site, including
    // release-notes screenshots. Without this, images render at their column
    // width with no way to enlarge them.
    "docusaurus-plugin-image-zoom",
    // .md twins of every built page (developer.sku.io/docs/foo.md) so AI
    // agents can fetch clean markdown instead of parsing the HTML shell.
    // Ordered BEFORE publish-openapi: that plugin's postBuild restores the
    // hand-curated static/llms.txt if this one overwrites it.
    [
      "@signalwire/docusaurus-plugin-llms-txt",
      {
        runOnPostBuild: true,
        onRouteError: "warn",
        siteTitle: "SKU.io API Documentation",
        content: {
          enableMarkdownFiles: true,
          // Emits /llms-full.txt — the whole docs corpus concatenated into one
          // file (the llms.txt standard's full-content companion). finalize-build
          // only restores the curated llms.txt, so this generated file survives.
          // Kept at includeDocs:true (no excludeRoutes) on purpose: excludeRoutes
          // is global and would also drop the per-endpoint .md twins, breaking the
          // "append .md to any URL" promise. The full dump therefore mirrors the
          // twins exactly.
          enableLlmsFullTxt: true,
          relativePaths: false,
          includeDocs: true,
          includeBlog: false,
          includePages: false,
        },
      },
    ],
    // The 2026-07 path canonicalization renamed every operation slug that
    // carried Postman host-variable leakage: get-domain-api-x → get-api-x.
    // Emit redirects from the old slugs so pre-cleanup deep links survive.
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath: string) {
          const m = existingPath.match(
            /^\/docs\/api\/(get|post|put|patch|delete|head|options)-(api-.+)$/
          );
          if (m) {
            return [
              `/docs/api/${m[1]}-domain-${m[2]}`,
              `/docs/api/${m[1]}-protocol-domain-${m[2]}`,
            ];
          }
          return undefined;
        },
      },
    ],
    // Serves the merged spec at /openapi.yaml plus per-tag chunks under
    // /openapi/ (postBuild copy/split from the repo-root spec, which the
    // skuio/sku publish workflow keeps current).
    "./plugins/publish-openapi",
    function webpackFallbackPlugin() {
      return {
        name: "webpack-fallback-plugin",
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                path: require.resolve("path-browserify"),
                fs: false,
                os: false,
                crypto: false,
                stream: false,
                http: false,
                https: false,
                zlib: false,
                assert: false,
              },
            },
          };
        },
      };
    },
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          skuio: {
            specPath: "openapi.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: true,
              sidebarCollapsed: true,
            },
          },
        },
      },
    ],
    // Indexes Release Notes posts by date and exposes the list as plugin
    // global data, consumed by the BlogSidebar override to render the
    // Year > Month > Week > Day drill-down tree.
    [
      "./plugins/release-notes-tree",
      {
        path: "release-notes",
        routeBasePath: "release-notes",
      },
    ],
    // ──────────────────────────────────────────────────────────────────
    // Release Notes — user-facing product updates.
    // Content is published from skuio/sku9 `release-notes/` by the
    // publish-release-notes workflow. One post per feature, dated by its
    // production-ship day; navigated by the date drill-down tree.
    // ──────────────────────────────────────────────────────────────────
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "release-notes",
        path: "release-notes",
        routeBasePath: "release-notes",
        blogTitle: "Release Notes",
        blogDescription:
          "New features, improvements, and fixes for the SKU.io inventory platform.",
        blogSidebarTitle: "Recent releases",
        blogSidebarCount: "ALL",
        postsPerPage: 10,
        showReadingTime: false,
        archiveBasePath: "archive",
        tagsBasePath: "tags",
        authorsMapPath: "authors.yml",
        onInlineTags: "throw",
        onInlineAuthors: "throw",
        onUntruncatedBlogPosts: "ignore",
        feedOptions: {
          type: "all",
          title: "SKU.io Release Notes",
          description:
            "New features, improvements, and fixes for the SKU.io platform.",
          copyright: `Copyright © ${currentYear} SKU.io.`,
        },
      },
    ],
    // ──────────────────────────────────────────────────────────────────
    // API Changelog — developer-facing additions, changes, and removals
    // to the API surface. Generated mechanically from the openapi.yaml
    // diff by the release-notes workflow.
    // ──────────────────────────────────────────────────────────────────
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "api-changelog",
        path: "changelog",
        routeBasePath: "changelog",
        blogTitle: "API Changelog",
        blogDescription:
          "Additions, changes, deprecations, and removals to the SKU.io API.",
        blogSidebarTitle: "Recent changes",
        blogSidebarCount: "ALL",
        postsPerPage: 10,
        showReadingTime: false,
        archiveBasePath: "archive",
        tagsBasePath: "tags",
        authorsMapPath: "authors.yml",
        onInlineTags: "throw",
        onInlineAuthors: "throw",
        onUntruncatedBlogPosts: "ignore",
        feedOptions: {
          type: "all",
          title: "SKU.io API Changelog",
          description:
            "Additions, changes, deprecations, and removals to the SKU.io API.",
          copyright: `Copyright © ${currentYear} SKU.io.`,
        },
      },
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: ["/release-notes", "/changelog"],
        searchBarPosition: "right",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // Split the monolithic search index by section. The 4,000+ API reference
        // pages dominate the index (~17-19 MB); without this every first search —
        // even from a guide — downloads the whole thing. The SearchBar auto-selects
        // the context matching the current page path, so a guide reader downloads
        // only the small guides index and an API reader only the API index.
        // useAllContextsWithNoSearchContext keeps search working (full index) from
        // pages outside these sections, e.g. the landing page.
        searchContextByPaths: ["docs/api", "docs/guides", "release-notes", "changelog"],
        useAllContextsWithNoSearchContext: true,
      },
    ],
  ],

  themeConfig: {
    // Default preview image for shared links (OG / Twitter). Brand card lives
    // at static/img/sku-social-card.png (1200×630).
    image: "img/sku-social-card.png",
    // docusaurus-plugin-image-zoom: click any image to open a full-size lightbox.
    zoom: {
      selector: ".markdown img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
    },
    navbar: {
      title: "SKU.io Docs",
      logo: {
        alt: "SKU.io Logo",
        src: "img/logo.svg",
        href: "/",
      },
      items: [
        {
          to: "/docs/guides/quickstart",
          label: "Guides",
          position: "left",
        },
        {
          to: "/docs/api/introduction",
          label: "API Reference",
          position: "left",
        },
        {
          to: "/release-notes",
          label: "Release Notes",
          position: "left",
        },
        {
          to: "/changelog",
          label: "API Changelog",
          position: "left",
        },
        {
          href: "https://sku.io",
          label: "SKU.io",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API Reference",
              to: "/docs/api/introduction",
            },
            {
              label: "Release Notes",
              to: "/release-notes",
            },
            {
              label: "API Changelog",
              to: "/changelog",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "SKU.io",
              href: "https://sku.io",
            },
            {
              label: "Support",
              href: "mailto:support@sku.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${currentYear} SKU.io.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
