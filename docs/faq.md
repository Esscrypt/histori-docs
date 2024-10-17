---
id: faq
title: Frequently Asked Questions (FAQ)
---

# Frequently Asked Questions

## How do you query an endpoint?

> The API host for all requests is:
```
http://api.histori.xyz/v1/
```

The endpoint path is appended to the API host (without repeating the `/v1/`). For example, if the endpoint is `GET /{:network_name}/balance/single?token_address={token_address}&holder={:wallet_address}/`, then an example of the full request URL is:

```bash
https://api.histori.xyz/v1/eth-mainnet/balance/single?token_address=0xF2ec4a773ef90c58d98ea734c0eBDB538519b988&holder=vitalik.eth
```

> All Histori API endpoints are called using `GET` requests.

Each request must include your `API_KEY` passed either in the request header `x-api-key`


## What is an API key and how do I get one?
An ** API key** is a unique identifier used to authenticate requests associated with your project for usage and billing purposes. You can get an API key by signing up at Histori API.

## Can I use POST or other HTTP methods?
Currently, all API endpoints only support `GET` requests. You cannot use `POST`, `PUT`, or `DELETE` with the API at this time.

## How do I handle rate limits?
Histori API implements rate limits to ensure the availability of its service. If you exceed the rate limit, you'll receive a `429` status code. In such cases, you can retry after the rate limit window resets. Consider using the pro plan for higher rate limits.

## What versions and networks are supported?
Currently, **only version v1** of the API is supported. As for networks, **only** `eth-mainnet` is supported. Other versions and networks WILL be added very soon in future releases.

## Where can I submit feedback?
We value your feedback, and it's essential to improving the API. Please submit your feedback through our [feedback form](https://forms.gle/W26WVARe3x7R6nmm8). Your input is highly appreciated and will help us shape future features and improvements. Suggestions about response structure, additional endpoints, technical enquiries and others are will all be reviewed and implemented.

## What does a typical API response look like?
A typical API response will return a JSON object with the requested data. Here’s an example response from a request to fetch an ERC20 token balance:
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

## How do i paginate results?
If an API endpoint supports pagination, the response will include pagination information (e.g., `page`, `limit`, and possibly `next` and `previous` links). You can use these values to fetch the next or previous set of results. For example:
```json
{
    "network_name": "eth-mainnet",
    "chain_id": 1,
    "page": 1,
    "limit": 10,
    "next": "https://api.histori.xyz/v1/eth-mainnet/token?page=22&limit=10",
    "previous": null,
    "tokens": [
        {
            "token_address": "0xB3e782D5919924Faa456B5b5689B0A45963da4b7",
            "block_height": 19971173,
            "token_type": "erc721",
            "name": "Count Dracula Fang Gang",
            "symbol": "CDFG"
        },
        {
            "token_address": "0x8Cc365Efed8419DE5358ea9D7E35E7bAFF11cc1A",
            "block_height": 19971122,
            "token_type": "erc721",
            "name": "Artisan Craft Egg",
            "symbol": "ACE"
        },
        {
            "token_address": "0xec14c247b9121fDf10b161772dcd9b13195574c4",
            "block_height": 19970878,
            "token_type": "erc721",
            "name": "ADHDBROSNFTS",
            "symbol": "ADHDBROSNFTS"
        },
        {
            "token_address": "0xE3e6aC8bCad6e714C7723D309AC8adc1b642F4D0",
            "block_height": 19970819,
            "token_type": "erc721",
            "name": "Beyond",
            "symbol": "BND"
        },
        {
            "token_address": "0x1125f84AE963bC32C986AbEcC44ef08064852761",
            "block_height": 19970768,
            "token_type": "erc721",
            "name": "African happiness",
            "symbol": "AFH"
        },
        {
            "token_address": "0x81eace0855E6e68B6435e138Aa7703AB0ba35326",
            "block_height": 19970704,
            "token_type": "erc721",
            "name": "Jacopo Orlandin",
            "symbol": "JAOR"
        },
        {
            "token_address": "0xE3E9DA7222c0fF85DEcbd8E30011eB275bcc3553",
            "block_height": 19970610,
            "token_type": "erc721",
            "name": "Last of the Amazons",
            "symbol": "AMAZONS"
        },
        {
            "token_address": "0x01c96A8Dfd2f5Ba5407766016b4f91219E2AAa54",
            "block_height": 19970608,
            "token_type": "erc721",
            "name": "ADI",
            "symbol": "LOVE"
        },
        {
            "token_address": "0x2235Ffdf1743ec4cB3C613718F9F7B1d8d22A39d",
            "block_height": 19970608,
            "token_type": "erc721",
            "name": "THE DANCE OF CULTURE",
            "symbol": "CLTDNC"
        },
        {
            "token_address": "0x3c488487FC43EF5AE4E20D25B367935B5d5438C7",
            "block_height": 19970491,
            "token_type": "erc721",
            "name": "Pepz Club",
            "symbol": "PEPC"
        }
    ]
}
```