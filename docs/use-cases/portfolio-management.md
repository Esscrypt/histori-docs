---
title: Portfolio Management
---

### Why  
For any investor or asset manager, historical data plays a crucial role in assessing risks, backtesting strategies, and understanding the long-term performance of assets. Real-time data provides insights into the present, but decisions grounded in historical trends are often the ones that yield sustainable success. By analyzing past performance, portfolio managers can make more informed decisions, optimizing their portfolios for better returns and risk management.

### How  
Our API allows portfolio managers to query historical balances and prices, ensuring that every investment decision is backed by data-driven insights. By accessing historical balances of tokens held across multiple wallets, combined with historical price data, managers can analyze trends, backtest their investment strategies, and assess long-term portfolio performance.

### Achieved Using Our API  
- Use the **`/balance/single`** endpoint to retrieve historical balances of assets held by a wallet. This allows managers to track the holdings over time and calculate their value at specific block heights or timestamps.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/balance/single?holder=0x1234567890abcdef&tokenAddress=0xabcdefabcdefabcdef&timestamp=2022-01-01T00:00:00Z
    ```

- To fetch historical price data for ETH/USDT, use the **`/uniswap/eth-usd-price`** endpoint.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/uniswap/eth-usd-price
    ```

By combining historical balances and token price data, portfolio managers can backtest investment strategies, identify trends, and optimize their portfolios for long-term success.
