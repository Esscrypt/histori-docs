# Histori Contracts Overview

This document provides an overview of the Histori token, the Deposit contract, and the Vesting contract. It includes a summary of their functionalities and links to the deployed contract addresses on both the Sepolia testnet and the mainnet networks (Ethereum and zkSync).

## 1. Histori Token

The **Histori Token (HST)** is an ERC20 token that serves as the native utility token for the Histori ecosystem. It is used for various operations within the platform, including transactions, staking, and participation in governance.

### Key Features:
- **Initial Supply**: 10 million HST tokens minted at deployment.
- **Standard ERC20 functionality**: Allows transfers, approvals, and other common token operations.
- **Permit functionality**: Supports gasless transactions via EIP-2612.

## 2. Deposit Contract

The **Deposit Contract** allows users to deposit HST tokens into the contract and earn rewards based on their deposits. This contract uses a vesting mechanism to manage user allocations and releases.

### Key Features:
- **Deposits**: Users can deposit HST tokens and choose their subscription tier (e.g., Starter, Growth, Business).
- **Vesting**: Supports vesting for user allocations, ensuring that tokens are released over a specified period.
- **Upgradable**: The contract is upgradeable, allowing for future enhancements while maintaining state.

## 3. Vesting Contract

The **Vesting Contract** manages the vesting schedule for token distribution to beneficiaries. It ensures that tokens are released in a controlled manner according to specified rules.

### Key Features:
- **Beneficiary Management**: Allows the owner to add beneficiaries and define their vesting rules.
- **Cliff and Duration**: Supports configurable cliff periods and total vesting durations.
- **Upgradable**: The contract is upgradeable, ensuring it can evolve with future requirements.

## Contract Addresses and Links

Below is a summary table of the deployed contract addresses on the Sepolia testnet and the mainnet networks (Ethereum and zkSync).

<details>
  <summary><strong>Ethereum Mainnet and zkSync Mainnet Addresses</strong></summary>

| Contract             | Network         | Contract Address                                   | Explorer Link                                                                                      |
|----------------------|------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------|
| HistoriToken         | Ethereum Mainnet | [0x7535a0d4abB00f646b5991e3d3D8e9A0E1721abE](https://etherscan.io/address/0x7535a0d4abb00f646b5991e3d3d8e9a0e1721abe) | [View Contract](https://etherscan.io/address/0x7535a0d4abb00f646b5991e3d3d8e9a0e1721abe) |
| HistoriToken         | zkSync Mainnet   | [0x7ce1a4b50334ada32a915056f3015eebc29c5964](https://era.zksync.network/token/0x7ce1a4b50334ada32a915056f3015eebc29c5964) | [View Contract](https://era.zksync.network/token/0x7ce1a4b50334ada32a915056f3015eebc29c5964) |
| Deposit Contract     | zkSync Mainnet   | [0xCf602328Eb5adF98B8f4203121516AB40a9F7eb8](https://explorer.zksync.io/tx/0x64ec92089afb5f1503cf344b4d6d4b05845573b098569b1b9080b508c4552e0d) | [View Contract](https://explorer.zksync.io/tx/0x64ec92089afb5f1503cf344b4d6d4b05845573b098569b1b9080b508c4552e0d) |
| Vesting Contract     | zkSync Mainnet   | [0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49](https://era.zksync.network/tx/0x64ec92089afb5f1503cf344b4d6d4b05845573b098569b1b9080b508c4552e0d) | [View Contract](https://era.zksync.network/tx/0x64ec92089afb5f1503cf344b4d6d4b05845573b098569b1b9080b508c4552e0d) |

</details>

<details>
  <summary><strong>Sepolia Testnet Addresses</strong></summary>

| Contract             | Network         | Contract Address                                   | Etherscan Link                                                                                      |
|----------------------|------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------|
| HistoriToken         | Sepolia Testnet  | [0x3F4c4013d6458894e7BFAdEf8b4B73bCBDd3E9c6](https://sepolia.etherscan.io/address/0x3f4c4013d6458894e7bfadef8b4b73bcbdd3e9c6) | [View Contract](https://sepolia.etherscan.io/address/0x3f4c4013d6458894e7BFAdEf8b4B73bCBDd3E9c6) |
| Deposit Contract     | Sepolia Testnet  | [0x1D51AaCEc9fE0e9955215D848cF5BC7DAFb7080a](https://sepolia.etherscan.io/address/0x1D51AaCEc9fE0e9955215D848cF5BC7DAFb7080a) | [View Proxy](https://sepolia.etherscan.io/address/0x1D51AaCEc9fE0e9955215D848cF5BC7DAFb7080a) |
| Vesting Contract     | Sepolia Testnet  | [0x8CC35e643919D945c83D329f819067868d2591D4](https://sepolia.etherscan.io/address/0x8CC35e643919D945c83D329f819067868d2591D4) | [View Proxy](https://sepolia.etherscan.io/address/0x8CC35e643919D945c83D329f819067868d2591D4) |

</details>

<details>
  <summary><strong>zkSync Testnet Addresses</strong></summary>

| Contract             | Network         | Contract Address                                   | Explorer Link                                                                                      |
|----------------------|------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------|
| HistoriToken         | zkSync Testnet   | [0x31bceaf326759672bd9c72c6d465bdeec0c188a8](https://sepolia-era.zksync.network/token/0x31bceaf326759672bd9c72c6d465bdeec0c188a8) | [View Contract](https://sepolia-era.zksync.network/token/0x31bceaf326759672bd9c72c6d465bdeec0c188a8) |
| Deposit Contract     | zkSync Testnet   | [0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49](https://sepolia-era.zksync.network/address/0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49) | [View Contract](https://sepolia-era.zksync.network/address/0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49) |
| Vesting Contract     | zkSync Testnet   | [0x0DF470e6B0204251a2B8CF1DBEbECCb79126D34A](https://sepolia-era.zksync.network/address/0x0DF470e6B0204251a2B8CF1DBEbECCb79126D34A) | [View Contract](https://sepolia-era.zksync.network/address/0x0DF470e6B0204251a2B8CF1DBEbECCb79126D34A) |

</details>
