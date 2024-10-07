import { useState } from "react";
import { CurrencyField } from "components";
import { useDebounce, useGetAssets, useGetTickers } from "hooks";
import { isNumber } from "./api";
import TickerList from "components/ticker-list";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const debouncedAmount = useDebounce(amount);
  const [currency, setCurrency] = useState("USD");
  const { data: assets } = useGetAssets();
  const { data: tickers, isLoading } = useGetTickers(currency, debouncedAmount);

  const handleOnAmountChange = (e) => {
    const { value } = e.target;
    if (isNumber(value.trim())) {
      setAmount(value);
    }
  };
  const handleOnCurrencyChange = (value) => {
    console.log(value);
    setCurrency(value);
  };

  return (
    <>
      <CurrencyField
        amount={amount}
        currency={currency}
        currencies={assets}
        onChangeAmount={handleOnAmountChange}
        onCurrencyChange={handleOnCurrencyChange}
      />
      <TickerList tickers={tickers} isLoading={isLoading} />
    </>
  );
}

export default CurrencyConverter;
