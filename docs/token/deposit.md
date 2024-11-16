# Guide to Depositing Tokens in Histori

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

Welcome to the Histori token deposit guide! This document will walk you through the steps to deposit your tokens, how the conversion works, and how your plan duration is calculated.

## What is Token Deposit?

In Histori, depositing tokens allows you to participate in our ecosystem, earn rewards, and enjoy various benefits associated with your chosen tier. Unlike traditional staking, once you deposit your tokens, you cannot withdraw them, but you can earn rewards based on your deposits.

## Monthly and Yearly Rewards

As part of the deposit program, 25% of the total supply of Histori tokens (HST) will be allocated as staking rewards over the next 10 years. This means you can earn rewards based on the amount of HST you deposit.

- **Monthly Rewards**: Users can expect to receive monthly rewards based on their tier and the amount they have deposited.
- **Yearly Rewards**: Over the course of the year, the total rewards earned will accumulate, providing additional benefits as your usage and deposits increase.

## How to Deposit Tokens

### Step 1: Connect Your Wallet
To start, you need to connect your Ethereum wallet that holds the Histori tokens (HST). Make sure you have enough tokens in your wallet.

### Step 2: Choose Your Tier
You can choose from three different tiers based on your deposit amount:

- **Starter**: Better insights for startups or small applications requiring moderate API usage.
- **Growth**: For growing businesses with higher API demands and steady growth.
- **Business**: Better insights for larger businesses or enterprises requiring extensive data access.

### Step 3: Deposit Your Tokens
Once you've selected your tier, you can deposit your tokens. Simply enter the amount you wish to deposit and confirm the transaction in your wallet.

### Step 4: Confirmation
After your deposit is successful, you'll receive a confirmation. Your tokens are now deposited, and you can start earning rewards!

## How Tokens are Converted

When you deposit tokens, the total amount in USD is calculated based on the current price of Histori tokens (HST). Here's how it works:

1. **Current HST Price**: The price of HST is fetched in real-time.
2. **Conversion to USD**: The total deposit amount (in HST) is multiplied by the current HST price to get the equivalent amount in USD.

For example, if you deposit 100 HST and the current price is $2, your total deposit in USD would be:
```
100 HST * $2 = $200
```

## How Plan Duration is Calculated

The duration of your plan is determined based on the total value of your deposit and the tier you selected. Here’s how it’s calculated:

1. **Determine Tier Price**: Each tier has a specific monthly price (e.g., Starter might be $50/month).
2. **Calculate Plan Duration**: The total deposit value in USD is divided by the tier price to determine how many months you will be enrolled in that tier.

For example, if your total deposit value is $200 and you choose the Growth tier (which costs $200/month), your plan duration would be:
```
$200 (total deposit) / $200 (tier price) = 1 month
```


## Summary

Depositing tokens in Histori is a straightforward process that allows you to earn rewards based on your contributions. By choosing a tier and understanding how your deposits are converted into a plan duration, you can maximize your benefits within the ecosystem.

If you have any questions or need further assistance, feel free to reach out to our support team!

Happy depositing!

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
