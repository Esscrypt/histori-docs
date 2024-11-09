---
id: changelog
title: Changelog
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial version of the Histori SDK for TypeScript.
- Support for fetching token balances, allowances, and historical data.
- Added ability to retrieve ETH to USDT prices from Uniswap V3.
- Initial documentation for installation, usage, and configuration.

### Changed
- Updated error handling to provide detailed messages for failed requests.

### Fixed
- Resolved an issue with the retry mechanism on rate-limited requests.

## [1.0.0] - 2024-10-26
### Added
- Initial release of the Histori SDK for TypeScript.
- Support for Ethereum Mainnet.
- Methods for fetching tokens, balances, allowances, and transaction details.
- Configuration options for network and API version.
- Built-in retry mechanism for handling rate limits.

---

[Unreleased]: https://github.com/esscrypt/histori-sdk-ts/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/esscrypt/histori-sdk-ts/releases/tag/v1.0.0
