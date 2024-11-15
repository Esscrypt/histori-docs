---
id: setup
title: Setup
---

# Set Up Guide

This guide will help you quickly get started with the Histori API by walking you through the process of obtaining your API key and making a sample request.

## Step 1: Sign Up and Log In

To access the Histori API, you first need to create an account.

1. Visit the [Histori API Portal](https://histori.xyz/signin).
2. Sign up with your email address and create a password. Alternatively, you can sign up with **GitHub**, **Google** or **Metamask**.
3. Once registered, log in to your account.

## Step 2: Get Your Project ID

1. Navigate to the **Project ID** section of your dashboard.
2. Click **Show** on the Project ID field.
3. Your API key will appear. Be sure to copy this key and keep it secure.

## Step 3: Set Your Project ID in Headers/SDK
> If you are making HTTP requests directly you will need to set the `x-api-key` header to the Project ID you just copied.
> If you are using the SDK You can set it up by setting it in the constructor:
1. Install the Typescript SDK using:
```bash
npm install @esscrypt/histori-sdk
```
1. Set up the instance with your API key in your code:
```bash
import HistoriClient from '@esscrypt/histori-sdk';

const client = new HistoriClient('<YOUR_API_KEY>');
```


## Step 4: Make a sample request
1. Using the REST API:
```bash
curl -X GET 'https://api.histori.xyz/v1/eth-mainnet/token?tokenType=erc20 \
-H 'x-api-key: <your_api_key>'
```
2. Or by using the SDK:
```bash
const tokens = await client.TokenService.getTokens();
```