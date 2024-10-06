const USD = {
  value: "USD",
  label: "USD",
  imgSrc: "https://cdn.uphold.com/assets/USD.svg",
};
export const getDefaultValue = (defaultValue, options) => {
  if (!options) {
    return USD;
  }
  return options?.find(({ value, label }) => value === defaultValue || label === defaultValue);
};
