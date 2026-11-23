# Stellar Mainnet Setup and Support Status

## Product Decision on Mainnet Support

As of the current release, Stellar Mainnet is an experimental/upcoming target for the web application. While environment configuration (`NEXT_PUBLIC_STELLAR_NETWORK=mainnet`) is fully supported across network helpers, wallet connection gating, and transaction signing, full production deployment on Mainnet requires final security audits and contract migrations. This document details how to configure mainnet when ready.

## Configuration

Set the following environment variable in your `.env.local` or deployment platform:

```env
NEXT_PUBLIC_STELLAR_NETWORK=mainnet
```

When configured, the application will:
- Expect Freighter to be connected to the Stellar Public/Mainnet network (`PUBLIC`).
- Route Stellar Expert explorer links to mainnet transactions.
- Display the `SOROBAN MAINNET` status label.
- Sign SEP-10 authentication challenges using the `PUBLIC` network identifier.
