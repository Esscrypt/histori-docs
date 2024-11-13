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

This guide lists the networks supported by Histori, including their chain IDs and activation status.

<table>
  <thead>
    <tr>
      <th>Network</th>
      <th>Network ID</th>
      <th>Chain ID</th>
      <th>Block Time</th>
      <th>Block Explorer</th>
      <th>Supports Querying Historical Data?</th>
      <th>Active on Histori?</th>
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
          {network.chainId} <CopyButton text={network.chainId.toString()} />
        </td>
        <td>
          {network.blockTime}
        </td>
        <td>
          {network.blockExplorer}
        </td>
        <td>{network.history ? "✅" : "❌"}</td>
        <td>{network.active ? "✅" : "❌"}</td>
      </tr>
    ))}
  </tbody>
</table>
