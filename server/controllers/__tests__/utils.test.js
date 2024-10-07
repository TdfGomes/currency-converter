const { mapAssets, mapTickers } = require("../utils");

const mockedAssets = [
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

test("should map assets to be compliant with the FE API contract", () => {
  expect(mapAssets(mockedAssets)).toEqual([
    { value: "PYUSD", label: "PYUSD", imgSrc: "https://cdn.uphold.com/assets/PYUSD.svg" },
    { value: "FRAX", label: "FRAX", imgSrc: "https://cdn.uphold.com/assets/FRAX.svg" },
  ]);
});

const mockedTickers = [
  {
    ask: "0.0277044627",
    bid: "0.0276140957",
    currency: "USD",
    pair: "ANKR-USD",
  },
  {
    ask: "0.49290859183949118861",
    bid: "0.49041155586946677188",
    currency: "GNS",
    pair: "USD-GNS",
  },
];

test("should map tickers to be compliant with the FE API contract", () => {
  expect(mapTickers(mockedTickers, 10)).toEqual([
    {
      value: "0.27659279200000003",
      currency: {
        value: "USD",
        label: "USD",
        imgSrc: "https://cdn.uphold.com/assets/USD.svg",
      },
    },
    {
      value: "4.91660073854479",
      currency: {
        value: "GNS",
        label: "GNS",
        imgSrc: "https://cdn.uphold.com/assets/GNS.svg",
      },
    },
  ]);
});
