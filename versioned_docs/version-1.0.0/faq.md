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


    The endpoint path is appended to the API host (without repeating the `/v1/`). For example, if the endpoint is `GET /v1/{network_name}/balance/{wallet_address}/{token_address}`, then an example of the full request URL is:

    ```bash
    https://api.histori.xyz/v1/eth-mainnet/balance/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B/
    ```

    All Histori API endpoints are called using `GET` requests.

    Each request must include your `API_KEY` passed either in the request header `x-api-key`


## What is an API key and how do I get one?
An API key is a unique identifier used to authenticate requests associated with your project for usage and billing purposes. You can get an API key by signing up at Histori API.

## Can I use POST or other HTTP methods?
Currently, all API endpoints only support GET requests. You cannot use POST, PUT, or DELETE with the API at this time.

## How do I handle rate limits?
Histori API implements rate limits to ensure the availability of its service. If you exceed the rate limit, you'll receive a 429 status code. In such cases, you can retry after the rate limit window resets. Consider using the pro plan for higher rate limits.

## How do you authenticate?

## What does a typical API response look like?

## How do I paginate results?

## What are the available chains supported?