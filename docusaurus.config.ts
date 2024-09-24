// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Histori API",
  tagline: "Histori API",
  // Change the URL to match your custom domain
  url: "https://www.docs.histori.xyz",  // The URL of your site
  baseUrl: "/histori-docs",  // Serve docs from the root
  
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "esscrypt", // GitHub org/user name
  projectName: "histori-docs", // Repository name

  trailingSlash: false,

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
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
        docsPluginId: "classic", // Use with preset-classic
        config: {
          api: {
            specPath: "swagger.json",  // Path to the Swagger spec
            outputDir: "docs/token-api",  // Output directory for the generated docs
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
    // Use docusaurus-plugin-client-redirects for redirection
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

  // Metadata for your site deployment
  deploymentBranch: 'gh-pages',  // Optional: The branch where GitHub Pages will serve your docs
};

export default async function createConfig() {
  return config;
}
