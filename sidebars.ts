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
        { type: "doc", id: "demo" }, // Demo guide
        { type: "doc", id: "sdk" }, // SDK Reference
        { type: "doc", id: "faq" }, // FAQ
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      items: [
        { type: "doc", id: "use-cases/portfolio-management" }, // Portfolio Management use case
        { type: "doc", id: "use-cases/machine-learning" }, // Machine Learning & Predictive Analytics
        { type: "doc", id: "use-cases/behavioral-analysis" }, // Behavioral Analysis
        { type: "doc", id: "use-cases/accounting-auditing" }, // Accounting & Auditing
        { type: "doc", id: "use-cases/regulatory-compliance" }, // Regulatory & Compliance Monitoring
        { type: "doc", id: "use-cases/risk-management" }, // Risk Management and Fraud Detection
        { type: "doc", id: "use-cases/tokenomics" }, // Tokenomics and Market Analysis
        { type: "doc", id: "use-cases/smart-contract-audits" }, // DeFi and Smart Contract Audits
        { type: "doc", id: "use-cases/nft-analytics" }, // NFT Analytics and Provenance Tracking
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
