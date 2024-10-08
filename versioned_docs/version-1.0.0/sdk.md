---
id: sdk
title: SDK Usage
---

# Histori SDK for TypeScript

The Histori SDK is the easiest way to interact with the Histori API for working with historical blockchain data. This SDK supports various blockchain networks, including Ethereum Mainnet and Testnets.

**Recommended:** Use Node.js v18 or above for the best experience.

> **Note:** An API key is required. You can register for a free key on the Histori [website](https://histori.xyz).

## Table of Contents
- [Histori SDK for TypeScript](#histori-sdk-for-typescript)
  - [Table of Contents](#table-of-contents)
  - [Documentation](#documentation)
  - [Installation](#installation)
  - [Creating a Client with HistoriClient](#creating-a-client-with-historiclient)
    - [Options for HistoriClient](#options-for-historiclient)
  - [Using the HistoriClient](#using-the-historiclient)
    - [Fetching Tokens](#fetching-tokens)
  - [Fetching Balance](#fetching-balance)
  - [Fetching Allowance](#fetching-allowance)
  - [Default Network and Version](#default-network-and-version)
    - [Options Object in Methods](#options-object-in-methods)
    - [Utility Functions](#utility-functions)
  - [Error Handling](#error-handling)
  - [Examples](#examples)
  - [Options reference](#options-reference)
  - [Contributing](#contributing)
  - [Show Your Support](#show-your-support)
  - [License](#license)

## [Documentation](https://esscrypt.github.io/histori-sdk-ts)
For detailed API documentation and additional examples, visit the official [Histori SDK Documentation](https://esscrypt.github.io/histori-sdk-ts) or the [Histori API Documentation](https://esscrypt.github.io/histori-docs)


## Installation

Install the SDK using npm:
```bash
npm install @esscrypt/histori-sdk
```

## Creating a Client with HistoriClient
The `HistoriClient` is the main entry point for interacting with the Histori API. You need to pass your API key and optional settings to configure the default version and network.
```bash
import HistoriClient from '@esscrypt/histori-sdk';

const client = new HistoriClient('<YOUR_API_KEY>');
```

### Options for HistoriClient
- `version (string)`: The API version to use. Default is 'v1'. Currently, only 'v1' is supported.
- `network (string)`: The blockchain network to connect to. Default is 'eth-mainnet'. Currently, only 'eth-mainnet' is supported.
- `debug (boolean)`: Enables server logs for API calls. Default: false.
- `enableRetry (boolean)`: Enables retrying API calls on rate limit errors (HTTP 429). Default: true.
- `maxRetries (number)`: Sets the number of retries on rate limit errors. Requires enableRetry to be true. Default: 2.
- `retryDelay (number)`: Sets the delay (in ms) before retrying on rate limit errors. Requires enableRetry to be true. Default: 2000.
- `source (string)`: Defines the source of the request for analytics purposes.

## Using the HistoriClient
### Fetching Tokens
The `getTokens` method retrieves a list of tokens with pagination options. It accepts an object with descriptive properties to specify the pagination parameters and any optional query parameters.
```bash
const tokens = await client.TokenService.getTokens({
  page: 1,          // Page number for pagination
  limit: 10         // Number of tokens to fetch per page
});
```

## Fetching Balance
You can use the `BalanceService` to fetch the balance of a specific wallet for a given token:
```bash
    const balance = await client.BalanceService.getBalance({
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
      blockNumber: 123456
    });
```

## Fetching Allowance
The `AllowanceService` can be used to get the allowance between an owner and a spender for a specific token:
```bash
const allowance = await client.AllowanceService.getAllowance({
  ownerAddress: '0xOwnerAddress',
  spenderAddress: '0xSpenderAddress',
  tokenAddress: '0xTokenAddress',
  blockNumber: 123456
});
```

## Default Network and Version
You can specify the `version` and `network` at the time of client creation. These values will be used as defaults for all subsequent API calls.
```bash
const client = new HistoriClient('<YOUR_API_KEY>', {
  version: 'v1',
  network: 'eth-mainnet'
});
```
If you want to override these defaults for a specific call, you can provide them as part of the arguments in individual methods. Example:
```bash

async function getAllowanceExample() {
  const allowance = await client.AllowanceService.getAllowance(
    '0xOwnerAddress',
    '0xSpenderAddress',
    '0xTokenAddress',
    123456,
    { version:'v1', network: 'eth-mainnet', debug: true, maxRetries: 3 } // Override settings for this request
  );
```

### Options Object in Methods
Most service methods accept an optional options object to allow for additional query parameters, providing flexibility in making API calls.

### Utility Functions
The SDK also includes various utility functions for working with blockchain data:

- `bigIntParser(input: string): bigint` - Converts a string to a bigint.
- `calculatePrettyBalance(value: number, decimals: number, isBigInt: boolean, precision: number): string `- Formats a balance into a human-readable string.
- `isValidApiKey(apiKey: string): boolean` - Checks if an API key is valid.
- `prettifyCurrency(amount: number, decimals: number, currency: string): string `- Formats a number into a currency string.

## Error Handling
All methods in the SDK throw errors with a standardized format:
``` bash
{
  "data": null,
  "error": true,
  "message": "Detailed error message",
  "error_code": 500
}
```

## Examples
```
async function runExamples() {
  // Fetch tokens with pagination
  const tokens = await client.TokenService.getTokens({ 
    version: 'v1',
    networkName: 'eth-mainnet',
    page: 1, 
    limit: 10 
  });
  console.log('Tokens:', tokens);

  // Fetch balance for a wallet
  const balance = await client.BalanceService.getBalance({
    version: 'v1',
    networkName: 'eth-mainnet',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    blockNumber: 123456
  });
  console.log('Balance:', balance);
}

runExamples();
```

## Options reference
Here’s how to create a `HistoriClient` instance with the new options:
```bash
import HistoriClient from '@esscrypt/histori-sdk';

const client = new HistoriClient('<YOUR_API_KEY>', {
  version: 'v1',
  network: 'eth-mainnet',
  debug: true,
  enableRetry: true,
  maxRetries: 3,
  retryDelay: 3000, // 3 seconds
  source: 'my-analytics-source',
});

async function testClient() {
  try {
    const tokens = await client.getTokens({ page: 1, limit: 10 });
    console.log('Tokens:', tokens);
  } catch (error) {
    console.error('Error fetching tokens:', error.message);
  }
}

testClient();

```
- `debug`: Logs detailed request information if true.
- `enableRetry`: Controls whether the client retries on HTTP 429 errors.
- `maxRetries`: Sets the maximum number of retry attempts.
- `retryDelay`: Specifies the delay between retries in milliseconds.
- `source`: Appended to request parameters for analytics purposes.

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check out the issues page for open tasks.

## Show Your Support
Give a ⭐️ if this project has helped you!

## License
This project is licensed under the MIT license.