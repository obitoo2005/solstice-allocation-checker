const TOTAL_FLARES_SUPPLY = 410_000_000_000;
const AIRDROP_ALLOCATION = 85_000_000;
const DEFAULT_TOTAL_COST = 7;

export const constants = {
  TOTAL_FLARES_SUPPLY,
  AIRDROP_ALLOCATION,
  DEFAULT_TOTAL_COST,
};

export const fdvOptions = [
  { label: "$100M FDV", value: 100_000_000 },
  { label: "$200M FDV", value: 200_000_000 },
  { label: "$300M FDV", value: 300_000_000 },
  { label: "$400M FDV", value: 400_000_000 },
];

export function calculateAllocation(userFlares, selectedFDV, totalCost) {
  const sanitizedFlares = Number.isFinite(userFlares) && userFlares > 0 ? userFlares : 0;
  const sanitizedFDV = Number.isFinite(selectedFDV) && selectedFDV >= 0 ? selectedFDV : 0;
  const sanitizedTotalCost = Number.isFinite(totalCost) && totalCost >= 0 ? totalCost : 0;
  const tokenPrice = sanitizedFDV / 1_000_000_000;
  const userShare = sanitizedFlares / TOTAL_FLARES_SUPPLY;
  const estimatedTokens = userShare * AIRDROP_ALLOCATION;
  const usdValue = estimatedTokens * tokenPrice;
  const netValue = usdValue - sanitizedTotalCost;
  const breakEvenFlares =
    tokenPrice > 0
      ? (sanitizedTotalCost / tokenPrice / AIRDROP_ALLOCATION) * TOTAL_FLARES_SUPPLY
      : null;
  const roi = sanitizedTotalCost > 0 ? (netValue / sanitizedTotalCost) * 100 : null;

  return {
    sanitizedFlares,
    sanitizedFDV,
    sanitizedTotalCost,
    tokenPrice,
    userShare,
    estimatedTokens,
    usdValue,
    netValue,
    breakEvenFlares,
    roi,
  };
}
