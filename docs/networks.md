import networks from './networks.json';
import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi'; // Import copy and check icons from react-icons

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} style={{ cursor: 'pointer', marginLeft: '5px', border: 'none', background: 'none' }}>
      {copied ? <FiCheck color="green" /> : <FiCopy />}
    </button>
  );
};



# Supported Networks
Total supported networks: {networks.length}
<!-- Total Mainnet networks: {networks.filter((n)=>{['mainnet'].includes(n)}).length} -->
This table lists all networks supported by Histori, including their chain IDs, Block explorers and capabilities.
You can copy-paste the `Network ID` and use it in your requests.
<table>
  <thead>
    <tr>
      <th>Network</th>
      <th>Network ID</th>
      <th>Chain ID</th>
      <th>Block Time</th>
      <th>Block Explorer</th>
      <th>Aggregated RPCs</th>
      <th>USD Costs?</th>
      <th>Historical Data?</th>
      <th>Active?</th>
    </tr>
  </thead>
  <tbody>
    {networks.map((network) => (
      <tr key={network.chainId}>
        <td>{network.name}</td>
        <td>
          {network.networkId} <CopyButton text={network.networkId.toString()} />
        </td>
        <td>
          {network.chainId ? network.chainId: "¯\_(ツ)_/¯"} {network.chainId && <CopyButton text={network.chainId.toString()} />}
        </td>
        <td>
          {network.blockTime}
        </td>
        <td>
          <a href={network.blockExplorer}>Explorer</a>
        </td>
        <td>
          {network.rpc.length}
        </td>
        <td>{network.nativeCurrencyToETHPool || network.nativeCurrencyToUSDPool ? "✅" : "❌"}</td>
        <td>{network.history ? "✅" : "❌"}</td>
        <td>{network.active ? "✅" : "❌"}</td>
      </tr>
    ))}
  </tbody>
</table>

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
