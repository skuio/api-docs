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

// Release Notes moved to docs.sku.io (skuio/docs) in 2026-07. These client-side
// redirects forward every old developer.sku.io/release-notes/* URL to its new
// home; the list was generated from the release-notes build at move time. The
// app's "What's New" popover and the navbar/footer now point at docs.sku.io.
const releaseNotesRedirects: { from: string; to: string }[] = JSON.parse(
  fs.readFileSync("./release-notes-redirects.json", "utf8")
);

const config: Config = {
  title: "SKU.io Docs",
  tagline: "API reference and changelog for the SKU.io platform",
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
        // Old /release-notes/* URLs → docs.sku.io (the feed moved off this site).
        redirects: releaseNotesRedirects,
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
    // Release Notes moved to docs.sku.io (skuio/docs) in 2026-07 — the
    // content-blog + release-notes-tree plugins now live there. Old URLs are
    // forwarded by the client-redirects `releaseNotesRedirects` list above.
    // The API Changelog blog below stays on this site.
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
    // A second, breaking-ONLY feed alongside the full changelog feed above, at
    // /changelog/breaking/{rss.xml,atom.xml,feed.json}. Integrators subscribe to
    // this to be paged only when a change removes an endpoint or tightens a
    // request requirement (posts the generator tags `breaking`), instead of the
    // full additive firehose.
    [
      "./plugins/breaking-changes-feed",
      {
        path: "changelog",
        routeBasePath: "changelog",
      },
    ],
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    // Typesense-backed search (replaces the local Lunr index). Crucially, the search
    // index now lives server-side in Typesense instead of being shipped to the browser
    // — which is what the 4,200+ API-reference pages needed all along (no more 17-19 MB
    // client index, no more trim-search-index.mjs post-build hack). The `api_docs`
    // collection is (re)built on every publish by .github/workflows/search-index.yml.
    "docusaurus-theme-search-typesense",
  ],

  themeConfig: {
    // Typesense search. The search-only API key is PUBLIC by design — search-action-only,
    // never write — so it's safe in the static bundle (like an Algolia DocSearch key). The
    // `api_docs` collection is populated by the search-index workflow. Same cluster as
    // docs.sku.io, separate collection. To go keyword → semantic later, add an `embedding`
    // field to the collection and include it in `typesenseSearchParameters.query_by`.
    typesense: {
      typesenseCollectionName: "api_docs",
      typesenseServerConfig: {
        nodes: [
          {
            host: "lnkop3txzmv2ic6up-1.a2.typesense.net",
            port: 443,
            protocol: "https",
          },
        ],
        apiKey: "joMetD2UX5WlAisU4Vris1XyvQx0FSGV",
      },
      typesenseSearchParameters: {},
    },
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
          href: "https://docs.sku.io/release-notes",
          label: "Release Notes",
          position: "left",
        },
        {
          to: "/changelog",
          label: "API Changelog",
          position: "left",
        },
        {
          to: "/agentic-skills",
          label: "Agentic Skills",
          position: "left",
        },
        {
          href: "https://book.sku.io/demo",
          label: "Book a call",
          position: "right",
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
              href: "https://docs.sku.io/release-notes",
            },
            {
              label: "API Changelog",
              to: "/changelog",
            },
            {
              label: "Agentic Skills",
              to: "/agentic-skills",
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
              label: "Book a call",
              href: "https://book.sku.io/demo",
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
