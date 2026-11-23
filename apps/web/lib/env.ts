/**
 * Chain/network/app settings read from `process.env.NEXT_PUBLIC_*`.
 */

export const DEFAULT_USDC_ISSUER =
  "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";

export const USDC_ISSUER =
  process.env.NEXT_PUBLIC_USDC_ISSUER || DEFAULT_USDC_ISSUER;

export const HORIZON_URL =
  process.env.NEXT_PUBLIC_HORIZON_URL || "https://horizon-testnet.stellar.org";

export const SOROBAN_RPC_URL =
  process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org";

export const NETWORK_PASSPHRASE =
  process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE || "Test SDF Network ; September 2015";

export const CONTRACT_IDS = {
  registry: process.env.NEXT_PUBLIC_REGISTRY_CONTRACT_ID || "",
  invoice: process.env.NEXT_PUBLIC_INVOICE_CONTRACT_ID || "",
  pool: process.env.NEXT_PUBLIC_POOL_CONTRACT_ID || "",
  escrow: process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ID || "",
  agentRegistry: process.env.NEXT_PUBLIC_AGENT_REGISTRY_CONTRACT_ID || "",
};

export const API_BASE_URL = (() => {
  const val = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!val && process.env.NODE_ENV === "production") {
    console.warn("Warning: NEXT_PUBLIC_API_BASE_URL is not set in production.");
  }
  return val || "http://localhost:8080";
})();

export const APP_URL = (() => {
  const val = process.env.NEXT_PUBLIC_APP_URL;
  if (!val && process.env.NODE_ENV === "production") {
    console.warn("Warning: NEXT_PUBLIC_APP_URL is not set in production.");
  }
  return val || "http://localhost:3000";
})();

export function readNetworkEnv() {
  return {
    horizonUrl: process.env.NEXT_PUBLIC_HORIZON_URL || undefined,
    sorobanRpcUrl: process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || undefined,
    networkPassphrase: process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE || undefined,
    contractIds: {
      registry: process.env.NEXT_PUBLIC_REGISTRY_CONTRACT_ID || undefined,
      invoice: process.env.NEXT_PUBLIC_INVOICE_CONTRACT_ID || undefined,
      pool: process.env.NEXT_PUBLIC_POOL_CONTRACT_ID || undefined,
      escrow: process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ID || undefined,
      agentRegistry:
        process.env.NEXT_PUBLIC_AGENT_REGISTRY_CONTRACT_ID || undefined,
    },
    usdcAssetCode: process.env.NEXT_PUBLIC_USDC_ASSET_CODE || undefined,
  };
}
