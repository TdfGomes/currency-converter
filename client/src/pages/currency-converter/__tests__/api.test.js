import { isNumber, mapAssetsToOptions } from "../api";

const mockedTickers = [
  {
    code: "PYUSD",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 6,
    },
    image: "https://cdn.uphold.com/assets/PYUSD.svg",
    name: "PayPal USD",
    shortName: "PYUSD",
    status: "open",
    symbol: "$",
    type: "stablecoin",
  },
  {
    code: "FRAX",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 18,
    },
    image: "https://cdn.uphold.com/assets/FRAX.svg",
    name: "Frax",
    shortName: "FRAX",
    status: "open",
    symbol: "$",
    type: "stablecoin",
  },
];

test("should map tickers to be able to use them as select dopdown list items", () => {
  expect(mapAssetsToOptions(mockedTickers)).toEqual([
    { value: "PYUSD", label: "PYUSD", imgSrc: "https://cdn.uphold.com/assets/PYUSD.svg" },
    { value: "FRAX", label: "FRAX", imgSrc: "https://cdn.uphold.com/assets/FRAX.svg" },
  ]);
});

test.each([
  { value: 23, expected: true },
  { value: 2.4567, expected: true },
  { value: "23.", expected: true },
  { value: "2.2343", expected: true },
  { value: " 2.2343", expected: true },
  { value: 0.004567, expected: true },
  { value: "foo", expected: false },
  { value: "2.23.43", expected: false },
])("should validate $value toBe $expected", ({ value, expected }) => {
  expect(isNumber(value)).toBe(expected);
});
