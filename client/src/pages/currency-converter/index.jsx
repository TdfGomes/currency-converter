import { CurrencyField } from "components";
import { useState } from "react";
import { useGetAssets, useGetTickers } from "hooks";
import { mapAssetsToOptions } from "./api";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const { data: assets } = useGetAssets(mapAssetsToOptions);
  const { data: tickers } = useGetTickers(currency);

  const handleOnAmountChange = (value) => {
    console.log(value);
  };
  const handleOnCurrencyChange = (value) => {
    console.log(value);
  };

  return (
    <CurrencyField
      amount={amount}
      currency={currency}
      currencies={assets}
      onChangeAmount={handleOnAmountChange}
      onCurrencyChange={handleOnCurrencyChange}
    />
  );
}

export default CurrencyConverter;
