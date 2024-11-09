---
id: demo
title: Demo
---

# Interactive DEMO 
> **Note**: You can explore our [**Interactive Demo**](/docs/api/token-controller-get-tokens) using the Demo API Key `demo_3027dae7229e6a4f`

# Demo Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key, understanding how to authenticate requests, and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://histori.xyz/signup).
2. Sign up with your email address and create a password. Alternatively, you can sign up with **GitHub**, **Google** or **Metamask**.
3. Once registered, Log in to your account.

---

## Step 2: Get Your API Key

Once logged in, you will be able to get your API key.

1. Navigate to the **API Keys** section of your dashboard.
2. Click **Show**
3. Your API key will appear. Be sure to copy this key and keep it secure. **Do not share your API key** as it is tied to your account and usage limits.

---

## Step 3: Understand API Authentication

You must include your API key in the headers of every request you make to the Histori API. The key is passed using the `x-api-key` header. Without this, your requests will be unauthorized.

Here’s an example of how your request headers should look:
`x-api-key: <YOUR_UNIQUE_API_KEY>`

---

## Step 4: Make a Sample Request

Now that you have your API key, let's try making a sample request to the Histori API. For this guide, we’ll retrieve the balance of an Ethereum address. Make sure to replace the example values with actual ones.

### API Endpoint:

`https://api.histori.xyz/v1/eth-mainnet/balance/single/token_address={:your_token}&holder={:your_ens_or_address}&block_height={:optional_block_height}`

---

### Sample Request Using cURL:

```bash
curl -X GET https://api.histori.xyz/v1/eth-mainnet/balance/single?token_address=0xF2ec4a773ef90c58d98ea734c0eBDB538519b988&holder=vitalik.eth' \
  -H 'x-api-key: demo_3027dae7229e6a4f'
```

---

### Sample Response:
```json
{
    "network_name": "eth-mainnet",
    "chain_id": 1,
    "holder": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "token_address": "0xF2ec4a773ef90c58d98ea734c0eBDB538519b988",
    "token_name": "Doge 2.0",
    "token_symbol": "DOGE2.0",
    "token_type": "erc20",
    "checked_at_block": 20984814,
    "checked_at_timestamp": "2024-10-17T10:53:35.000Z",
    "balance": "18842536318442137573493"
}
```

---

## Step 5: Check Rate Limits and Quotas
Each API key has a rate limit based on your subscription plan (`Free`, `Starter`, `Growth`, `Business`, or `Enterprise`). You can check your usage in the Dashboard under the Usage section.

If you reach your rate limit, consider upgrading your plan or wait until the next reset period (monthly).

## Step 6: Error Handling
If your API key is invalid or you've exceeded your rate limit, the API will return an appropriate error message. Here’s an example of a typical error response:

### Example Error Response:
```json
{
    "message": "Historical Allowance does not exist for this owner and spender",
    "error": "Not Found",
    "statusCode": 404
}
```

Make sure to handle these errors properly in your application to avoid downtime or failed requests.
--- 