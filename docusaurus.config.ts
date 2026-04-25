import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SKU.io Developer Docs",
  tagline: "API Reference for the SKU.io platform",
  favicon: "img/favicon.ico",

  url: "https://developer.sku.io",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "skuio",
  projectName: "api-docs",

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
          autoCollapseSidebarCategories: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
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
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/docs",
        searchBarPosition: "right",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "SKU.io Developer Docs",
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
          title: "API",
          items: [
            {
              label: "API Reference",
              to: "/docs/api/introduction",
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
      copyright: `Copyright © ${new Date().getFullYear()} SKU.io.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
