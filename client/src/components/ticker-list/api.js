export function roundValue(strValue, precision = 4) {
  return parseFloat(strValue, 10).toFixed(precision);
}
