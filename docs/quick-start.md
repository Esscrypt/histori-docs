---
id: quick-start
title: Quick Start Guide
---

# Quick Start Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://api.histori.xyz/sign-up).
2. Sign up with google, github, metamask, or your email address and password.

## Step 2: Get Your API Key

Once logged in, you will be able to generate your API key.

1. Navigate to the **API Keys** section of your dashboard.
2. Click **Show** on the API Key field.
3. Your API key will appear. Be sure to copy this key and keep it secure.

## Step 3: Make an API Request

All requests to the Histori API require your API key to be sent in the `x-api-key` header. The API uses a RESTful approach, and all endpoints are accessible via `GET` requests.

### Example Request

Here’s an example of how to query the balance of an Ethereum address on the `eth-mainnet` network:

**Endpoint:**

```bash
GET /v1/{:network_name}/balance/single?tokenAddress={:token_address}&holder={:holder}&blockNumber={:block_number}
```
- **network_name**: The blockchain network (e.g., eth-mainnet).
- **holder**: The wallet address or ENS name of the holder you want to query.
- **token_address**: The contract address of the token.
- **block_number**: You can optionally specify a block number for which you want to query the data
  
### Example API call
``` bash
curl -X GET 'https://api.histori.xyz/v1/eth-mainnet/balance/single?holder=0x00000000004E3D5628234F18b977041e5242651f&tokenAddress=0xCeD4E93198734dDaFf8492d525Bd258D49eb388E' \
-H 'x-api-key: demo_3027dae7229e6a4f'
```
### Example Response
```
{
    "wallet_address": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
    "token_address": "0x1234567890abcdef1234567890abcdef12345678",
    "balance": "1000000000000000000",
    "block_number": 12345678,
    "token_type": "ERC20",
}

```

In this example, the request queries the balance of the wallet address `0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B` for the Ethereum contract at `0x1234567890abcdef1234567890abcdef12345678` on the `eth-mainnet` network. The `x-api-key` header contains your API key.

### Required Headers

`x-api-key`: Your unique API key. You can get it from the [Histori API Portal](https://api.histori.xyz/sign-up).

### Explore Other Endpoints

After successfully making your first request, you can explore other API endpoints and retrieve data such as transaction history, token balances, and more. Be sure to check the full API reference for more details.
---
For any issues or further questions, check our FAQ or contact support.
