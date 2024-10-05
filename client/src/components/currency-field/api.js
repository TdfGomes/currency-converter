export const getDefaultValue = (defaultValue, options) =>
  options.find(({ value, label }) => value === defaultValue || label === defaultValue);
