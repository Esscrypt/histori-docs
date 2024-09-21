import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "token-api/token-api",
    },
    {
      type: "category",
      label: "Tokens",
      items: [
        {
          type: "doc",
          id: "token-api/token-controller-get-tokens",
          label: "Get paginated list of tokens, optionally filter by type.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "token-api/token-controller-get-token-by-address",
          label: "Get token by contract address.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Balances",
      items: [
        {
          type: "doc",
          id: "token-api/balance-controller-get-balance",
          label: "Get balance by wallet, token, and block number for a given network.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Allowances",
      items: [
        {
          type: "doc",
          id: "token-api/allowance-controller-get-allowance",
          label: "Get allowance by owner, spender, token, and block number for a given network.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TokenSupplies",
      items: [
        {
          type: "doc",
          id: "token-api/token-supply-controller-get-token-supply",
          label: "Get token supply by token address and block number for a given network.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "TokenIDs",
      items: [
        {
          type: "doc",
          id: "token-api/token-id-controller-get-token-id",
          label: "Get token metadata by contract address and token ID for a given network.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
