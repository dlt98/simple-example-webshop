export const formatDecimals = (number?: number | string, decimals = 4) => {
  if (!number) return;

  return +parseFloat((+number).toFixed(decimals)).toLocaleString("en-US", {
    useGrouping: false,
    maximumFractionDigits: decimals,
  });
};
