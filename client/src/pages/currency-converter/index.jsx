import { useState } from "react";
import { CurrencyField } from "components";
import { useGetAssets, useGetTickers } from "hooks";
import { isNumber, mapAssetsToOptions } from "./api";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const { data: assets } = useGetAssets(mapAssetsToOptions);
  const { data: tickers } = useGetTickers(currency);

  const handleOnAmountChange = (e) => {
    const { value } = e.target;
    if (isNumber(value.trim())) {
      setAmount(value);
    }
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
