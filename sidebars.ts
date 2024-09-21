// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro", // Directly link to the single Introduction markdown file
      label: "Introduction", // Name of the item in the sidebar
    },
    {
      type: "doc",
      label: "Overview",
      id: "overview", // Directly link to the single Overview markdown file
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        { type: "doc", id: "quick-start" }, // Quick start guide
        { type: "doc", id: "faq" }, // FAQ
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "Histori API Reference",
        slug: "/docs/token-api",
      },
      items: require("./docs/token-api/sidebar.js"),
    },
  ],
};

export default sidebars;
