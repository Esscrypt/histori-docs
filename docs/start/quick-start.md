---
id: quick-start
title: Quick Start Guide
---

# Quick Start Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://api.histori.xyz/sign-up).
2. Sign up with Metamask, Google, Github or your email address and password.

## Step 2: Get Your Project ID

Once logged in, you will be able to generate your API key.

1. Navigate to the **Project ID** section of your dashboard.
2. Click **Show** on the Project ID field.
3. Your Project ID key will appear. Be sure to copy this key and keep it secure.

## Step 3: Make an API Request

All requests to the Histori API require your Project ID API key to be sent either in the `x-api-key` header or in the `projectId` query parameter. The API uses a RESTful approach, and all endpoints are accessible via `GET` requests.

### Example Request Format

Here’s an example of how to query the balance of an Ethereum address on the `eth-mainnet` network:

**Endpoint:**

```bash
GET /v1/{:network_name}/balance/single?token_address={:token_address}&holder={:holder}&block_height={:block_height}
```
- **`network_name`**: The blockchain network (e.g., eth-mainnet).
- **`holder`**: The wallet address or ENS name of the holder you want to query.
- **`token_address`**: The contract address of the token.
- **`block_height`**: You can `optionally` specify a block number for which you want to query the data
- **`date`**: You can `optionally` specify a Date for which you want to query the data. You can specify either `date` or `block_height`, but not both as they refer to the same timestamp.
  
### Example API call
``` bash
curl -X GET 'https://api.histori.xyz/v1/eth-mainnet/balance/single?token_address=0xF2ec4a773ef90c58d98ea734c0eBDB538519b988&holder=vitalik.eth' \
-H 'x-api-key: 8ry9f6t9dct1se2hlagxnd9n2a'
```
> **Note**: This example Uses the Demo Project ID, which is rate-limited and could be used up. Make sure you have a valid one from the [Histori API Portal](https://api.histori.xyz/sign-up).

--- 

### Example Response
```json
{
    "network_name": "eth-mainnet",
    "chain_id": 1,
    "holder": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "token_address": "0xF2ec4a773ef90c58d98ea734c0eBDB538519b988",
    "token_name": "Doge 2.0",
    "token_symbol": "DOGE2.0",
    "token_type": "erc20",
    "checked_at_block": 20988246,
    "checked_at_date": "2024-10-17T22:23:35.000Z",
    "balance": "18842536318442137573493"
}

```

In this example, the request queries the balance of the holder `vitalik.eth` for the Ethereum contract at `0xF2ec4a773ef90c58d98ea734c0eBDB538519b988` on the `eth-mainnet` network. The `x-api-key` header contains your Project ID.

### Required Headers

`x-api-key`: Your unique API key. You can get it from the [Histori API Portal](https://api.histori.xyz/sign-up). Alternatively you can set the Project ID in the `projectId` query parameter

### Explore Other Endpoints

**After successfully making your first request, you can explore other API endpoints and retrieve data such as transaction history, token balances, and more. Be sure to check the full API reference for more details.**

---

> For any issues or further questions, check our [FAQ](/docs/start/faq) or contact support.
