---
title: NFT Analytics and Provenance Tracking
---

### Why  
Non-fungible tokens (NFTs) have transformed digital ownership, but understanding the history and provenance of an NFT is critical to maintaining its value and authenticity. Collectors, artists, and platforms need tools to track the creation, ownership transfers, and transaction history of NFTs. Provenance—knowing where an NFT came from and how it has changed hands—ensures trust in the market, while detailed analytics help users understand the market dynamics and value trends of NFTs.

### How  
Our API provides detailed historical data on NFTs, including ownership, token metadata, and transaction history. By tracking wallet interactions, token transfers, and provenance, users can ensure that the NFT’s value is protected and can make informed decisions about buying or selling. For platforms and collectors, analyzing the behavior and market trends of NFTs helps determine the best strategies for managing collections and enhancing market engagement.

### Achieved Using Our API  
- Use the **`/nft/token-uri`** endpoint to retrieve the metadata and URI of an NFT. This is essential for verifying the details of a specific ERC721 or ERC1155 token, ensuring the authenticity of its content.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/nft/token-uri?tokenAddress=0xabcdefabcdefabcdef&tokenId=1
    ```

- The **`/nft/owner`** endpoint enables you to verify if a specific address owns an NFT. This is critical for confirming ownership in the case of a sale, auction, or transfer, and helps in ensuring the authenticity of the token.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/nft/owner?tokenAddress=0xabcdefabcdefabcdef&owner=0x1234567890abcdef&tokenId=1
    ```

- Use the **`/balance/single`** endpoint to track historical ownership and token holdings for NFTs. This allows collectors and platforms to review how an NFT has changed hands over time, maintaining the provenance of the token.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/balance/single?holder=0x1234567890abcdef&tokenAddress=0xabcdefabcdefabcdef&blockNumber=123456
    ```

- Use the **`/transactions/{txHash}`** endpoint to retrieve detailed transaction information about NFT transfers. This allows collectors and marketplaces to understand the history of an NFT, including past sales or trades.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/transactions/{txHash}
    ```

- Use the **`/chain/logs/contract/{contractAddress}`** endpoint to monitor all contract events for an NFT smart contract, providing insights into the lifecycle of a token from minting to transfers and beyond.

    ```http
    GET https://api.histori.xyz/v1/eth-mainnet/chain/logs/contract/0xabcdefabcdefabcdef?startBlock=123456&endBlock=123999
    ```

By combining these data points, NFT creators, collectors, and marketplaces can ensure the authenticity, trace the provenance, and analyze the value trends of NFTs. Our API gives users the historical and real-time data they need to protect and manage their digital assets, making it easier to navigate the NFT space with confidence.
