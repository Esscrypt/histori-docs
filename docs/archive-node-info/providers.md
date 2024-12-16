---
title: Histori RPC Service Providers
---

<!-- # Histori RPC Service Providers -->

The Histori RPC Service aggregates and optimizes requests across a variety of blockchain infrastructure providers. This robust network ensures reliability, scalability, and consistent access to archival and real-time blockchain data. Below, we detail each provider and their unique contributions to the service.

---

## 1. Alchemy

### Overview
[Alchemy](https://www.alchemy.com/) is a high-performance blockchain infrastructure provider known for its developer-friendly tools and analytics. It supports multiple blockchain networks, including Ethereum, Polygon, and Arbitrum.

### Why It’s Used
- **Reliability**: High uptime ensures consistent access to blockchain data.
- **Advanced Developer Tools**: Features like enhanced APIs, debugging tools, and analytics.
- **Performance**: Optimized for low latency and high throughput.

### Use Case
Alchemy is ideal for querying real-time and historical data for high-traffic decentralized applications.

---

## 2. Infura

### Overview
[Infura](https://www.infura.io/), a ConsenSys product, provides robust and scalable APIs for blockchain interaction. It is one of the most widely used providers for Ethereum and IPFS.

### Why It’s Used
- **Network Reach**: Supports Ethereum Mainnet and testnets, as well as other blockchains like Polygon and Filecoin.
- **Stability**: Proven track record of handling high-demand scenarios.
- **Ease of Use**: Well-documented APIs for fast integration.

### Use Case
Infura is often used as a primary provider for Ethereum RPC calls due to its reliability and ecosystem integration.

---

## 3. Flashbots

### Overview
[Flashbots](https://protect.flashbots.net/) is a research and development organization focused on addressing MEV (Miner Extractable Value) issues in blockchains. It offers a private transaction relay to protect against front-running.

### Why It’s Used
- **MEV Protection**: Protects sensitive transactions from front-running and sandwich attacks.
- **Private Transaction Submission**: Ensures transactions are only visible to miners.
- **Ethereum Mainnet Focus**: Specialized for Ethereum users needing secure transactions.

### Use Case
Flashbots is used for private transaction submission and cancellation on the Ethereum Mainnet.

---

## 4. Self-Hosted Archival Nodes

### Overview
Histori operates **self-hosted archival nodes** to provide direct access to blockchain history without reliance on third parties.

### Why It’s Used
- **Full Data Control**: Guarantees data availability and consistency.
- **Advanced Querying**: Enables querying historical states and transaction details.
- **Redundancy**: Acts as a fallback when third-party providers experience issues.

### Use Case
Self-hosted nodes are critical for archival requests and compliance-related queries requiring complete and precise blockchain data.

---

## 5. Ankr

### Overview
Ankr provides decentralized RPC endpoints with a focus on affordability and global coverage. It supports Ethereum, Binance Smart Chain, and other popular blockchains.

### Why It’s Used
- **Decentralized Network**: Ensures resilience and scalability.
- **Cost-Effectiveness**: Competitive pricing for high-volume requests.
- **Wide Blockchain Support**: Covers major networks and sidechains.

### Use Case
[Ankr](https://www.ankr.com/) is a go-to provider for affordable and scalable blockchain interaction.

---

## 6. DRPC

### Overview
[DRPC](https://drpc.org/) specializes in providing distributed and decentralized RPC nodes, with a focus on scalability and fast response times.

### Why It’s Used
- **Performance**: High-speed nodes for low-latency queries.
- **Decentralization**: Reduces reliance on centralized infrastructure.
- **Scalability**: Optimized for high-demand applications.

### Use Case
DRPC is used for applications requiring rapid responses and decentralized infrastructure.

---

## 7. QuickNode

### Overview
[QuickNode](https://www.quicknode.com/) offers enterprise-grade blockchain infrastructure, with a focus on speed and developer tools. It supports a wide array of blockchains, including Ethereum, Solana, and Avalanche.

### Why It’s Used
- **High Performance**: Low-latency responses for time-sensitive applications.
- **Comprehensive Support**: Covers emerging and established blockchain ecosystems.
- **Developer Tools**: Advanced APIs and tools for efficient blockchain interaction.

### Use Case
QuickNode is ideal for performance-critical applications that require advanced developer tooling.

---

## 8. Other Providers

### Overview
Histori integrates additional providers to ensure comprehensive network coverage and redundancy. These include smaller, specialized providers that cater to niche blockchain ecosystems.

### Why It’s Used
- **Redundancy**: Ensures service continuity during outages.
- **Niche Support**: Covers blockchains and features not supported by mainstream providers.
- **Flexibility**: Provides alternative endpoints for load balancing.

### Use Case
Other providers are leveraged to extend the service’s capabilities across diverse blockchain ecosystems.

---

## Conclusion

By leveraging a diverse network of providers, the Histori RPC Service ensures reliability, performance, and security. This multi-provider approach allows us to deliver consistent, high-quality blockchain data access for developers and enterprises. For more information, visit our [documentation](https://docs.histori.xyz/docs/archive-node-info/intro) or contact our [support team](mailto:support@histori.xyz).