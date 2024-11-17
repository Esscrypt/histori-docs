// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Histori - The Future of Blockchain Data Access",
  tagline: "Histori - The Future of Blockchain Data AccessI",
  url: "https://docs.histori.xyz", // Use the full custom domain
  baseUrl: "/", // Base URL should be "/" since the subdomain itself serves the docs

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "esscrypt",
  projectName: "histori-docs",

  trailingSlash: false,

  themeConfig: {
    metadata: [
      {name: 'og:title', content: 'Histori - The Future of Blockchain Data Access'},
      {name: 'og:description', content: 'Unlock historical blockchain data with ease. Histori provides developers access to archival nodes, decoded transaction histories, and token analytics across EVM networks. Build smarter with reliable data.'},
      // {name: 'og:image', content: ''},
      {name: 'og:url', content: 'https://docs.histori.xyz'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: 'Histori'},
      {name: 'og:locale', content: 'en_US'},

      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Histori - The Future of Blockchain Data Access'},
      {name: 'twitter:description', content: 'Access historical blockchain data like never before. Power your dApps with archival nodes and robust data solutions.'},
      {name: 'twitter:site', content: '@histori_xyz'},
      {name: 'twitter:creator', content: '@mihail_kirov'},

    
    ],
    announcementBar: {
      id: 'support_us',
      content: '🚀 Histori is seeking partnerships with EVM networks to provide seamless access to archival nodes and historical blockchain data.🤝 <a target="https://forms.gle/hFoCt2ahRrd8fYDj7" rel="noopener noreferrer" href="https://forms.gle/hFoCt2ahRrd8fYDj7">Join</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'manifest',
          href: 'img/site.webmanifest', // Make sure the path is correct
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: 'img/favicon.ico', // Ensure favicon is linked correctly
        },
      },
    ],
    navbar: {
      title: "Histori - The Future of Blockchain Data Access",
      logo: {
        alt: "Histori Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: '/docs/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: '/docs/use-cases/tokenomics',
          label: 'Use Cases',
          position: 'left',
        },
        {
          to: '/docs/start/quick-start',
          label: 'REST API',
          position: 'left',
        },
        {
          to: '/docs/sdk/intro',
          label: 'SDK',
          position: 'left',
        },
        {
          to: '/docs/start/gpt',
          label: 'AI Assistant',
          position: 'left',
        },
        {
          to: '/docs/archive-node-info/intro',
          label: 'Archival MultiNode',
          position: 'left',
        },
        {
          href: 'https://github.com/esscrypt/histori-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://x.com/histori_xyz',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'D885CKOSDV',

      // Public API key: it is safe to commit it
      apiKey: '78086ec075001db895522e49c0176f29',

      indexName: 'histori',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
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
        gtag: {
          trackingID: 'G-T153GPV90L',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-TFWH8JNT',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
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
          evmNode: {
            specPath: "rpc-swagger.json",
            outputDir: "docs/archive-node",
            sidebarOptions: {
              groupPathsBy: "tag",
              // categoryLinkSource: "tag",
            },
          },
        }
      }
    ],
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: false, // Set to true if you want to see debugging logs
    //     offlineModeActivationStrategies: [
    //       'appInstalled',
    //       'standalone',
    //       'queryString',
    //     ],
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: '/img/docusaurus.png',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: '/manifest.json', // your PWA manifest
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'theme-color',
    //         content: 'rgb(37, 194, 160)',
    //       },
    //     ],
    //   },
    // ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs/overview',
          },
          {
            from: '/docs',
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
