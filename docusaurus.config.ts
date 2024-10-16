// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Histori API",
  tagline: "Histori API",
  url: "https://docs.histori.xyz", // Use the full custom domain
  baseUrl: "/", // Base URL should be "/" since the subdomain itself serves the docs

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "esscrypt",
  projectName: "histori-docs",

  // trailingSlash: false,

  themeConfig: {
    navbar: {
      title: "Histori API",
      logo: {
        alt: "Histori Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: '/docs/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/docs/quick-start',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/docs/use-cases/tokenomics',
          label: 'Use Cases',
          position: 'left',
        },
        {
          to: '/docs/api/token-controller-get-tokens',
          label: 'Interactive API Reference',
          position: 'left',
        },

        {
          href: 'https://github.com/esscrypt/histori-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          includeCurrentVersion: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "swagger.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              // categoryLinkSource: "tag",
            },
          },
        }
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs/overview',
          },
        ],
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  deploymentBranch: 'gh-pages',
};

export default async function createConfig() {
  return config;
}
