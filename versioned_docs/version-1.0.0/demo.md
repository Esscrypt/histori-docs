---
id: demo
title: Demo
---

# Demo Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key, understanding how to authenticate requests, and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://histori.xyz/signup).
2. Sign up with your email address and create a password. Alternatively, you can sign up with GitHub or Google.
3. Once registered, log in to your account.

---

## Step 2: Get Your API Key

Once logged in, you will be able to generate your API key.

1. Navigate to the **API Keys** section of your dashboard.
2. Click **Generate API Key** (if you haven't generated one already).
3. Your API key will appear. It will start with `HISTORI_`. Be sure to copy this key and keep it secure. **Do not share your API key** as it is tied to your account and usage limits.

### Example API Key:
`HISTORI_youruniqueapikey`

---

## Step 3: Understand API Authentication

You must include your API key in the headers of every request you make to the Histori API. The key is passed using the `x-api-key` header. Without this, your requests will be unauthorized.

Here’s an example of how your request headers should look:
`x-api-key: HISTORI_youruniqueapikey`

---

## Step 4: Make a Sample Request

Now that you have your API key, let's try making a sample request to the Histori API. For this guide, we’ll retrieve the balance of an Ethereum address. Make sure to replace the example values with actual ones.

### API Endpoint:

`https://api.histori.xyz/v1/eth-mainnet/balance/{walletAddress}`

---

### Sample Request Using cURL:

```bash
curl -X GET 'https://api.histori.xyz/v1/eth-mainnet/balance/0xYourEthereumAddress' \
  -H 'x-api-key: HISTORI_youruniqueapikey'
```

---

### Sample Response:
```bash
{
  "walletAddress": "0xYourEthereumAddress",
  "balance": "1.23456789 ETH",
  "blockNumber": 15000000
}
```

---

## Step 5: Check Rate Limits and Quotas
Each API key has a rate limit based on your subscription plan (Free, Starter, Growth, Business, or Enterprise). You can check your usage in the Dashboard under the Usage section.

If you reach your rate limit, consider upgrading your plan or wait until the next reset period (monthly).

## Step 6: Error Handling
If your API key is invalid or you've exceeded your rate limit, the API will return an appropriate error message. Here’s an example of a typical error response:

### Example Error Response:
```bash
{
  "error": "Invalid API Key",
  "message": "The API key provided is invalid or has expired."
}
```

Make sure to handle these errors properly in your application to avoid downtime or failed requests.
--- 