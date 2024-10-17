# Querying Blockchain Logs Using the Histori API

This guide explains how to use the Histori API to query blockchain logs, specifically the `Transfer(address, address, uint256)` event for an ERC20 contract. We'll use the **DAI** contract address as an example: `0x6b175474e89094c44da98b954eedeac495271d0f`.

### Prerequisites

- **API Key**: Required for authentication via the `x-api-key` header.
- **Base URL**: All requests are made to `https://api.histori.xyz/v1`.

### Endpoint

The endpoint for querying logs by contract address is:

```
GET /logs/contract/
```

For our example:

```
GET https://api.histori.xyz/v1/logs/contract/0x6b175474e89094c44da98b954eedeac495271d0f
```

### Query Parameters

Optional filters:
- **startBlock**: The starting block number. Should be later than the deployment block of the contract.
- **endBlock**: The ending block number (must be > `startBlock` and within 2000 blocks).
- **eventSignature**: For ERC20 Tokens the event signature is `Transfer(address, address, uint256)`

# Example CURL command
```
curl -X GET "http://localhost:3001/eth-mainnet/chain/logs/signature/Transfer(address,address,uint256)?startBlock=20912000&contractAddress=0x6b175474e89094c44da98b954eedeac495271d0f&endBlock=20914000" \
-H "x-api-key: <YOUR_API_KEY_HERE>" \
```
Replace `<YOUR_API_KEY_HERE>` with your actual API key.

## Example JavaScript (Axios)
Using the `axios` library:
```javascript
const axios = require('axios');

const apiKey = 'YOUR_API_KEY_HERE';
const url = 'https://api.histori.xyz/v1/logs/contract/0x6b175474e89094c44da98b954eedeac495271d0f';
const params = {
  startBlock: 18000000,
  endBlock: 18002000,
  eventSignature: 'Transfer(address, address, uint256)`
};

axios.get(url, {
  headers: { 'x-api-key': apiKey },
  params,
})
.then(response => {
  console.log('Logs:', response.data);
})
.catch(error => {
  console.error('Error:', error.response ? error.response.data : error.message);
});
```
