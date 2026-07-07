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

  onBrokenLinks: "warn",
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
      },
    ],
  ],

  themeConfig: {
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
