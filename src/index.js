export const ARC_CHAIN = {
  "id": 5042002,
  "name": "Arc Testnet",
  "rpc": "https://rpc.testnet.arc.network",
  "explorer": "https://testnet.arcscan.app",
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 6
  }
};

export function formatUsdc(units){const value=BigInt(units);const whole=value/1000000n;const frac=String(value%1000000n).padStart(6,'0').replace(/0+$/,'');return frac?`${whole}.${frac} USDC`:`${whole} USDC`;}
export function txUrl(hash){if(!/^0x[0-9a-fA-F]{64}$/.test(hash))throw new Error('invalid tx hash');return `${ARC_CHAIN.explorer}/tx/${hash}`;}
export function normalizeAddress(address){if(!/^0x[0-9a-fA-F]{40}$/.test(address))throw new Error('invalid address');return address.toLowerCase();}
export function labelRisk({tags=[],txCount=0}){if(tags.includes('scam'))return 'high';if(tags.includes('cex')||txCount>1000)return 'known';return 'unknown';}
export function addLabel(book,address,label){return {...book,[normalizeAddress(address)]:label};}
