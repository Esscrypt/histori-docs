---
title: Accounting & Auditing
---

### Why  
Blockchain’s immutability and transparency provide an ideal foundation for ensuring accountability in accounting and auditing. For businesses that manage digital assets or engage in blockchain transactions, accurately tracking and reporting these transactions is crucial for financial integrity. Auditors also need clear, historical data to verify asset ownership, transaction records, and balances. The challenge, however, lies in accessing this data in a structured, reliable manner that ensures compliance with legal and financial standards.

### How  
Our API enables accountants and auditors to gather accurate, verifiable records of historical transactions, token balances, allowances, and more. With detailed transaction logs, token supply information, and wallet balance data, the API facilitates auditing processes by providing a clear, traceable history of financial activities on the blockchain. Whether it’s verifying balances at a specific point in time, checking token supplies, or reviewing detailed logs of transactions, our API offers a powerful toolset for ensuring financial transparency.

### Achieved Using Our API  
- Use the **`/balance/single`** endpoint to retrieve historical balances of tokens for a specific wallet. This helps verify asset ownership at a given block or timestamp.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/balance/single?holder=0x1234567890abcdef&tokenAddress=0xabcdefabcdefabcdef&blockNumber=123456
    ```

- Track token supplies at different points in time using the **`/token-supply`** endpoint. This is essential for verifying the supply of a token at the time of an audit or financial report.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/token-supply?tokenAddress=0xabcdefabcdefabcdef&blockNumber=123456
    ```

- Retrieve transaction details using the **`/transactions/{txHash}`** endpoint. This allows auditors to verify that specific transactions occurred and to cross-check them against internal records.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/transactions/{txHash}
    ```

- The **`/chain/block`** endpoint allows you to retrieve detailed information about a block, including its timestamp, which is useful for tracking when specific transactions were processed.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/chain/block?blockNumber=123456
    ```

- Use the **`/chain/logs/contract/{contractAddress}`** endpoint to retrieve event logs for a specific smart contract. This can be invaluable for auditing dApp interactions, token transfers, and smart contract executions.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/chain/logs/contract/0xabcdefabcdefabcdef?startBlock=123456&endBlock=123999
    ```

By leveraging these endpoints, accounting and auditing teams can efficiently verify balances, trace transaction histories, and ensure compliance with financial standards. With a clear, immutable view into blockchain transactions and balances, our API supports a transparent and trustworthy audit process.
