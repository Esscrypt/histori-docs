---
title: DeFi and Smart Contract Audits
---

### Why  
In the decentralized finance (DeFi) ecosystem, ensuring the security and functionality of smart contracts is paramount. A single flaw in a smart contract can result in significant financial loss or exploitation. Smart contract audits, both pre-deployment and post-deployment, help ensure the security and integrity of DeFi protocols. Furthermore, users and auditors need historical data on how contracts behave over time to identify vulnerabilities, review token allowances, and assess risk. Transparent and thorough auditing is essential for fostering trust in DeFi platforms.

### How  
Our API provides key tools for both developers and auditors to track smart contract interactions, review transaction histories, and ensure the safety of DeFi protocols. By accessing event logs, allowances, token transfers, and transaction data, auditors can gain a deep understanding of how smart contracts have been interacting with users, tokens, and other contracts. With detailed historical records, vulnerabilities can be spotted early, and contract behavior can be closely monitored to prevent exploits.

### Achieved Using Our API  
- Use the **`/chain/logs/contract/{contractAddress}`** endpoint to retrieve detailed logs for a specific smart contract. This allows auditors to trace interactions, identify anomalies, and review how a contract is being used over time.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/chain/logs/contract/0xabcdefabcdefabcdef?startBlock=123456&endBlock=123999
    ```

- The **`/allowance/single`** endpoint can be used to track allowances between users and contracts, which is critical for ensuring no unauthorized token movements are allowed within a DeFi protocol.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/allowance/single?owner=0x1234567890abcdef&spender=0xabcdefabcdefabcdef&tokenAddress=0xabcdefabcdefabcdef&blockNumber=123456
    ```

- Retrieve historical token transfers and verify token ownership using the **`/balance/single`** endpoint. This is essential for monitoring how tokens move between users and contracts, and ensuring no abnormal behaviors occur.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/balance/single?holder=0x1234567890abcdef&tokenAddress=0xabcdefabcdefabcdef&blockNumber=123456
    ```

- For comprehensive transaction data, the **`/transactions/{txHash}`** endpoint provides insights into how a specific transaction involving a smart contract was processed, enabling auditors to verify contract execution.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/transactions/{txHash}
    ```

- Use the **`/chain/block`** endpoint to retrieve detailed information about the block in which a smart contract interaction occurred. This helps auditors pinpoint the exact time and block context of a suspicious transaction.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/chain/block?blockNumber=123456
    ```

By leveraging these tools, smart contract auditors can thoroughly analyze contract interactions, review transaction histories, and ensure that no vulnerabilities are being exploited in DeFi protocols. Our API enables a transparent and secure auditing process, giving both users and auditors the confidence they need in the decentralized finance space.
