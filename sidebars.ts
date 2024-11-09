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
        { type: "doc", id: "start/setup" }, // Quick start guide
        { type: "doc", id: "start/quick-start" }, // Quick start guide
        { type: "doc", id: "start/demo" }, // Demo guide
        { type: "doc", id: "start/faq" }, // FAQ
      ],
    },
    {
      type: 'category',
      label: 'Histori SDK',
      items: [
        { type: 'doc', id: 'sdk/intro' }, // SDK Introduction
        { type: 'doc', id: 'sdk/changelog' }, // SDK Introduction
        // { type: 'doc', id: 'sdk/quick-start' }, // SDK Quick Start
        // { type: 'doc', id: 'sdk/usage' }, // SDK Usage
        // { type: 'doc', id: 'sdk/faq' }, // SDK FAQ
      ],
    },
    {
      type: "category",
      label: "Archival Node",
      items: [
        { type: "doc", id: "archive-node-info/intro" }, // Archival Node setup
      ],
    },
    {
      type: "category",
      label: "Tokenomics",
      items: [
        { type: "doc", id: "token/contracts" }, // Archival Node setup
        { type: "doc", id: "token/deposit" }, // Archival Node setup
        { type: "doc", id: "token/tokenomics" }, // Archival Node setup
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
        slug: "/docs/api",
      },
      items: require("./docs/api/sidebar.js"),
    },
    {
      type: "category",
      label: "Archival Node RPC API Reference",
      link: {
        type: "generated-index",
        title: "Histori Archival Node RPC API Reference",
        slug: "/docs/archive-node",
      },
      items: require("./docs/archive-node/sidebar.js"),
    },
    // {
    //   type: "category",
    //   label: "Tutorials",
    // },
    {
      type: "category",
      label: "Community",
      items: [
        { type: "doc", id: "community/contributing" }, // Contributing to Histori
        { type: "doc", id: "community/license" }, // License
        { type: "doc", id: "community/acknowledgements" }, // Acknowledgements
        { type: "doc", id: "community/contact" }, // Contact
      ],
    },
  ],
};

export default sidebars;
