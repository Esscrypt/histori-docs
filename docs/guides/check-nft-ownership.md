---
title: Check NFT Ownership
---

# How to Check Ownership of ERC721/ERC1155 Tokens Using the Histori API

This guide shows you how to use the Histori API to verify whether a specific address owns an ERC721 or ERC1155 token. You can also check ownership at a particular block height.

### Base URL

The base URL for the API is:  
`https://api.histori.xyz/v1/`

## 1. Make a Request to the API

### Endpoint

Use this endpoint to check ownership:
```http
GET /nft/is-owner
```

### Required Query Parameters

- **`network`**: The blockchain network (e.g., `eth-mainnet` for Ethereum mainnet).
- **`token_address`**: The smart contract address of the token.
  - This is the address where the token contract is deployed.
- **`owner`**: The wallet address you want to check for ownership.
  - You can also use an **ENS** name (e.g., `vitalik.eth`), which will automatically resolve to the corresponding Ethereum address.
- **`token_id`**: The ID of the token you want to check.

### Optional Query Parameter

- **`block_height`**: The block number at which you want to check ownership. If not specified, the latest block is used.

### Required Header

Include your API key in the request headers:

- **Header Name**: `x-api-key`
- **Header Value**: Your API key (replace `"YOUR_API_KEY"` with your actual key).

## 2. Example Requests

### Check Ownership at the Latest Block

```http
GET https://api.histori.xyz/v1/nft/is-owner?token_address=0xB3e782D5919924Faa456B5b5689B0A45963da4b7&owner=0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3&token_id=1
```
### Check Ownership at a Specific Block Height
```http
GET https://api.histori.xyz/v1/eth-mainnet/nft/is-owner?token_address=0xB3e782D5919924Faa456B5b5689B0A45963da4b7&owner=0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3&token_id=1&block_height=12345678

```

## 3. Make the Request Using `curl` or JavaScript
### Using curl
```bash
curl -X GET "https://api.histori.xyz/v1/eth-mainnet/nft/is-owner?token_address=0xB3e782D5919924Faa456B5b5689B0A45963da4b7&owner=0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3&token_id=1" \
-H "x-api-key: YOUR_API_KEY"
```
### Using JavaScript (Node.js)
```javascript
const axios = require('axios');

const apiUrl = 'https://api.histori.xyz/v1/eth-mainnet/nft/is-owner';
const params = {
  token_address: '0xB3e782D5919924Faa456B5b5689B0A45963da4b7',
  owner: '0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3',
  token_id: '1',
  // block_height: 12345678, // Uncomment this line to specify a block height
};

axios
  .get(apiUrl, {
    params,
    headers: {
      'x-api-key': 'YOUR_API_KEY',
    },
  })
  .then((response) => {
    console.log('Ownership Check Response:', response.data);
  })
  .catch((error) => {
    console.error('Error checking ownership:', error.message);
  });

```

## 4. Interpreting the Response
If the request is successful, you will get a JSON response indicating whether the specified address owns the token.
### Example Response
```
{
  "network_name": "eth-mainnet",
  "token_address": "0xB3e782D5919924Faa456B5b5689B0A45963da4b7",
  "owner": "0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3",
  "token_id": "1",
  "is_owner": true,
  "checked_at_block": "latest"
}
```

### Example Response with block_height
```json
{
  "network_name": "eth-mainnet",
  "token_address": "0xB3e782D5919924Faa456B5b5689B0A45963da4b7",
  "owner": "0xd5470BaFb6074B10107b303D0cCe03cA5539b6E3",
  "token_id": "1",
  "is_owner": true,
  "checked_at_block": "12345678"
}
```
The `is_owner` field will be `true` if the specified address owns the token at the given block; otherwise, it will be `false`.

## 5. Additional Information
**ENS Support**: The owner parameter supports ENS domains (e.g., vitalik.eth), which will be resolved to their corresponding Ethereum addresses.
**Token Address**: Make sure the token_address is indeed an ERC721 or ERC1155 token contract. This address can be verified using a blockchain explorer like Etherscan.
**Historical Ownership**: Adding `block_height` allows you to check the ownership status at a specific point in the past.