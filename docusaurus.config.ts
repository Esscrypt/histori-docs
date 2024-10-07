// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import * as fs from 'fs';
import path from 'path';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// Read all versions from versions.json if it exists
const versions = fs.existsSync(path.join(__dirname, 'versions.json'))
  ? JSON.parse(fs.readFileSync(path.join(__dirname, 'versions.json'), 'utf8'))
  : [];

const config: Config = {
  title: "Histori API",
  tagline: "Histori API",
  url: "https://api.histori.xyz",  // Updated URL
  baseUrl: "/histori-docs/",  // Root URL for the custom domain

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
          routeBasePath: "docs",  // Base path for the docs
          includeCurrentVersion: true,  // Include the current version
          lastVersion: versions.length > 0 ? versions[0] : "current",  // Use the latest version from versions.json if available
          versions: {
            current: {
              label: "Next (Unreleased)",  // Custom label for the current version
              path: "",  // Keep the current version at the root
            },
            ...versions.reduce((acc, version) => {
              acc[version] = {
                label: version,  // Label for the version
                path: version,  // Path for the version
              };
              return acc;
            }, {} as Record<string, { label: string; path: string }>),
          },
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
