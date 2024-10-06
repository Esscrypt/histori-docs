---
id: quick-start
title: Quick Start Guide
---

# Quick Start Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://api.histori.xyz/sign-up).
2. Sign up with your email address and create a password.
3. Once registered, log in to your account.

## Step 2: Get Your API Key

Once logged in, you will be able to generate your API key.

1. Navigate to the **API Keys** section of your dashboard.
2. Click **Show API Key**.
3. Your API key will appear. It will start with `HISTORI_`. Be sure to copy this key and keep it secure.

Example API Key: `HISTORI_youruniqueapikey`

## Step 3: Make an API Request

All requests to the Histori API require your API key to be sent in the `x-api-key` header. The API uses a RESTful approach, and all endpoints are accessible via `GET` requests.

### Example Request

Here’s an example of how to query the balance of an Ethereum address on the `eth-mainnet` network:

**Endpoint:**

```bash
GET /v1/{:network_name}/balance/{:wallet_address}/{:contract_address}/
```
- **network_name**: The blockchain network (e.g., eth-mainnet).
- **wallet_address**: The wallet address you want to query.
- **contract_address**: The contract address of the token.
### Example API call
``` bash
curl -X GET 'https://api.histori.xyz/v1/eth-mainnet/balance/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/0x1234567890abcdef1234567890abcdef12345678/' \
-H 'x-api-key: HISTORI_youruniqueapikey'
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

`x-api-key`: Your unique API key, which starts with `HISTORI_`.

### Explore Other Endpoints

After successfully making your first request, you can explore other API endpoints and retrieve data such as transaction history, token balances, and more. Be sure to check the full API reference for more details.
---
For any issues or further questions, check our FAQ or contact support.
