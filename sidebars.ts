// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Overview",
      id: "overview", // Directly link to the single Overview markdown file
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        { type: "doc", id: "setup" }, // Quick start guide
        { type: "doc", id: "quick-start" }, // Quick start guide
        { type: "doc", id: "demo" }, // Quick start guide
        { type: "doc", id: "sdk" }, // SDK Reference
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
