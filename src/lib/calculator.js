const TOTAL_FLARES_SUPPLY = 410_000_000_000;
const AIRDROP_ALLOCATION = 85_000_000;
const REGISTRATION_FEE = 7;

export const constants = {
  TOTAL_FLARES_SUPPLY,
  AIRDROP_ALLOCATION,
  REGISTRATION_FEE,
};

export const fdvOptions = [
  { label: "$100M FDV", value: 100_000_000 },
  { label: "$200M FDV", value: 200_000_000 },
  { label: "$300M FDV", value: 300_000_000 },
  { label: "$400M FDV", value: 400_000_000 },
];

export function calculateAllocation(userFlares, selectedFDV) {
  const sanitizedFlares = Number.isFinite(userFlares) && userFlares > 0 ? userFlares : 0;
  const tokenPrice = selectedFDV / 1_000_000_000;
  const userShare = sanitizedFlares / TOTAL_FLARES_SUPPLY;
  const estimatedTokens = userShare * AIRDROP_ALLOCATION;
  const usdValue = estimatedTokens * tokenPrice;
  const netValue = usdValue - REGISTRATION_FEE;
  const breakEvenFlares =
    (REGISTRATION_FEE / tokenPrice / AIRDROP_ALLOCATION) * TOTAL_FLARES_SUPPLY;

  return {
    sanitizedFlares,
    tokenPrice,
    userShare,
    estimatedTokens,
    usdValue,
    netValue,
    breakEvenFlares,
  };
}
