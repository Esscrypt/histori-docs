# Guide to Acquiring and Using Histori Tokens (HST)

import React from 'react';

<div style={{
  backgroundColor: '#f5f7fa', 
  border: '1px solid #dfe1e6', 
  borderRadius: '8px', 
  padding: '16px', 
  textAlign: 'center',
  margin: '16px 0',
  fontFamily: 'Arial, sans-serif'
}}>
  <h2 style={{ color: '#2c3e50', margin: '0 0 8px' }}>Histori Token (HST) Update 🚀</h2>
  <p style={{ color: '#34495e', margin: '0 0 8px' }}>
    The <strong>Histori token (HST)</strong> is not yet distributed. Stay tuned for our upcoming <strong>ICO</strong>—details will be announced soon!
  </p>
  <p style={{ margin: '0' }}>
    👉 Follow us on <a href="https://twitter.com/histori_xyz" style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>Twitter</a> for the latest updates and announcements.
  </p>
</div>

Histori Tokens (HST) are available through several channels, including Uniswap, the ICO, and exchanges. Once acquired, we recommend bridging HST to zkSync Era for lower fees and depositing to the Deposit contract to earn rewards. Here’s how:

---

## Step 1: Acquiring Histori Tokens (HST)

### 1.1 Purchase on Uniswap
   - Use Uniswap to exchange ETH or other supported tokens for HST.
   - Ensure you're connected to Ethereum Mainnet.
   - **Uniswap Contract Address**: [0x7535a0d4abB00f646b5991e3d3D8e9A0E1721abE](https://etherscan.io/address/0x7535a0d4abb00f646b5991e3d3d8e9a0e1721abe)

### 1.2 Participate in the ICO
   - Follow Histori’s official announcements to join the ICO and secure tokens directly.

### 1.3 Purchase on Exchanges
   - Look for HST on partnered exchanges for easy acquisition.

---

## Step 2: Bridging HST to zkSync Era

For optimal gas efficiency, bridge your HST tokens to zkSync Era:

1. Visit the [zkSync Bridge](https://portal.zksync.io/bridge/).
2. Connect your wallet and select "Ethereum" as the source network.
3. Enter the HST token details and bridge to zkSync Era.
4. Once bridged, your HST tokens will be available on zkSync at address:
   - **zkSync Mainnet Address**: [0x7ce1a4b50334ada32a915056f3015eebc29c5964](https://era.zksync.network/token/0x7ce1a4b50334ada32a915056f3015eebc29c5964)

---

## Step 3: Deposit HST to the Deposit Contract on zkSync Era

Depositing HST to the Deposit contract allows you to earn rewards:

1. Make sure your HST tokens are on zkSync Era.
2. Interact with the **Deposit Contract** on zkSync to deposit tokens and select your subscription tier.
3. Tokens deposited to the contract will earn rewards and provide access to various Histori features.

---

## Step 4: Vesting and Additional Token Allocation

Histori’s **Vesting Contract** distributes tokens to beneficiaries directly on zkSync for the lowest fees possible:

- Beneficiaries can track and claim their tokens via the Vesting contract.

---

## Contract Overview

Here’s an overview of relevant contract addresses:

| Contract          | Network           | Address | Link |
|-------------------|-------------------|---------|------|
| Histori Token     | Ethereum Mainnet  | 0x7535a0d4abB00f646b5991e3d3D8e9A0E1721abE | [View on Etherscan](https://etherscan.io/address/0x7535a0d4abb00f646b5991e3d3d8e9a0e1721abe) |
| Histori Token     | zkSync Mainnet    | 0x7ce1a4b50334ada32a915056f3015eebc29c5964 | [View on zkSync](https://era.zksync.network/token/0x7ce1a4b50334ada32a915056f3015eebc29c5964) |
| Deposit Contract  | zkSync Mainnet    | 0xCf602328Eb5adF98B8f4203121516AB40a9F7eb8     | [View on zkSync](https://era.zksync.network/token/0xCf602328Eb5adF98B8f4203121516AB40a9F7eb8) |
| Vesting Contract  | zkSync Mainnet    | 0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49     | [View on zkSync](https://era.zksync.network/token/0x16Cc130eA1ff7E39FFAb80ED5A9FEaE19547aD49) |

For developers or testers, feel free to reach out if you need Sepolia test HST tokens for experimentation.

**Sepolia Testnet Contracts**:
- **Histori Token**: [0x3F4c4013d6458894e7BFAdEf8b4B73bCBDd3E9c6](https://sepolia.etherscan.io/address/0x3f4c4013d6458894e7BFAdEf8b4B73bCBDd3E9c6)
- **Deposit Contract**: [0x1D51AaCEc9fE0e9955215D848cF5BC7DAFb7080a](https://sepolia.etherscan.io/address/0x1D51AaCEc9fE0e9955215D848cF5BC7DAFb7080a)
- **Vesting Contract**: [0x8CC35e643919D945c83D329f819067868d2591D4](https://sepolia.etherscan.io/address/0x8CC35e643919D945c83D329f819067868d2591D4)

---

Thank you for being part of the Histori ecosystem. For any questions, reach out to our team!
<footer style={{
  backgroundColor: '#f9fafb',
  borderTop: '1px solid #e0e0e0',
  padding: '20px',
  textAlign: 'center',
  marginTop: '40px',
  fontFamily: 'Roboto, sans-serif',
}}>
  <p style={{
    margin: '0 0 8px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
  }}>
    Ready to unlock blockchain history with Histori's API?
  </p>
  <p style={{
    margin: '0 0 16px',
    fontSize: '14px',
    color: '#666',
  }}>
    Get started today and explore seamless access to historical blockchain data.
  </p>
  <a href="https://histori.xyz/signin" style={{
    display: 'inline-block',
    backgroundColor: '#28a745', /* Green color from Docusaurus */
    color: '#ffffff',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '50px', /* Fully rounded button */
    fontWeight: '600',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}>
    Get Your API Key
  </a>
</footer>
