---
title: Histori Archival RPC Node Guide
---

# Interactive DEMO 
> **Note**: You can explore our [**Interactive Demo**](/docs/archive-node/eth-block-number) using the Demo Project ID  `8ry9f6t9dct1se2hlagxnd9n2a`

Welcome to the Histori multi-chain archival RPC node. This service allows you to interact with Archival Nodes using a unified endpoint. This guide will show you how to get started, authenticate, and make requests.

## 1. Overview

The Histori archival RPC node supports querying 60+ networks with a simple endpoint format. All requests use the JSON-RPC API, making it easy to perform common blockchain operations, such as querying blocks and transactions.

### Base URL

All requests are made to the following base URL:
```bash
https://node.histori.xyz/
```


## 2. Supported Networks

A comprehensive list of supported networks can be found in the [Supported Networks](docs/networks) section

Format:
- To query a specific network, use: `https://node.histori.xyz/<NETWORK_NAME>/<YOUR_PROJECT_ID>`
> Replace `YOUR_PROJECT_ID` with the project ID from the [Histori Dashboard](https://histori.xyz/dashboard).
> Replace `NETWORK_NAME` with the network you want to do RPC calls to. You can find a complete list of networks in the [Supported Networks](docs/networks) section

## 3. Authentication

All requests must include an project ID for authentication. The project ID can be obtained from the [Histori Dashboard](https://histori.xyz/dashboard).
Again ,like the REST API, the Project ID can either be supplied as a path parameter, as a query parameter named `projectId` or in the `x-api-key` header.

## 4. Making Requests

### Request Format

All requests are made using the JSON-RPC 2.0 format. The basic structure of a request is:

```json
{
    "jsonrpc": "2.0",
    "method": "<method_name>",
    "params": [<parameters>],
    "id": <request_id>
}
```
- `jsonrpc`: The version of JSON-RPC (always "2.0").
- `method`: The Ethereum RPC method you want to call (e.g., eth_getBlockByNumber).
- `params`: An array of parameters for the method.
- `id`: A unique identifier for the request. You can optionally set these differently to keep track of requests

### 4.1 Example Request Using `eth_getBlockByNumber`
This method retrieves information about a block by number. Lets get the information about block 20 million
**cURL Example**
```bash
curl -X POST https://node.histori.xyz/eth-mainnet/8ry9f6t9dct1se2hlagxnd9n2a \
-H "Content-Type: application/json" \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["latest", true],
    "id": 1
}'
```

**JavaScript Example (Node.js)**
```javascript
const axios = require('axios');

// Replace with your actual API key
const PROJECT_ID = 'YOUR_PROJECT_ID';

const payload = {
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: ["latest", true],
    id: 1
};

axios.post(`https://node.histori.xyz/eth-mainnet/${PROJECT_ID}`, payload, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Block Data:', response.data);
})
.catch(error => {
    console.error('Error:', error.message);
});
```

Replace `PROJECT_ID` with your actual Project ID. You can get it from the [Histori Dashboard](https://histori.xyz/dashboard).

### 4.2 Example Request Using `eth_getTransactionByHash`
This method retrieves a transaction by its hash.
**cURL Example**
```bash
curl -X POST https://node.histori.xyz/eth-mainnet/8ry9f6t9dct1se2hlagxnd9n2a \
-H "Content-Type: application/json" \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_getTransactionByHash",
    "params": ["0xf85e0f37296608a3a23ffd8b2349c4cb25e9174d357c32d4416d3eb1d214080e"],
    "id": 1
}'
```

## 5. Error Handling
### Common Error Responses
- **400 Bad Request**: Returned if the request payload is not properly formatted.
- **401 Unauthorized**: Returned if the projectId is missing or invalid.
- **403 Forbidden**: Returned if the projectId cannot use this product.
- **429 Too Many Requests**: Returned if the rate limit is exceeded.
## Troubleshooting Tips
Ensure the `projectId` query parameter is included and correctly set.
Double-check the format of the JSON-RPC request payload.

## 6. Rate Limits
Histori's archival RPC node may enforce rate limits to prevent abuse. If you receive a `429 Too Many Requests` response, you may need to reduce the frequency of your requests or contact support for higher rate limits.

## 7. Additional Resources
- (Ethereum JSON-RPC Methods)[https://ethereum.org/en/developers/docs/apis/json-rpc/]

## 8. Support
If you encounter any issues or have questions, reach out to our support team at `support@histori.xyz` or directly at our (Telegram)[https://t.me/+Khm3XK761_Y1NWI8]