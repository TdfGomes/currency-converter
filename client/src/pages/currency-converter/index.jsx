import { useGetAssets, useGetTickers } from "hooks";

function CurrencyConverter() {
  const assets = useGetAssets();
  const tickers = useGetTickers();
  console.log({ assets, tickers });
  return <h1>Currrency Converter</h1>;
}

export default CurrencyConverter;
