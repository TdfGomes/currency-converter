import { useState } from "react";
import { Container, CurrencyField, TickerList, Hero, Header } from "components";
import { useDebounce, useGetAssets, useGetTickers } from "hooks";
import { isNumber } from "./api";

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
  const handleOnCurrencyChange = (value) => setCurrency(value);

  const handleOnLogin = () => console.log("Login In!");

  return (
    <>
      <Header links={["Personal", "Bussiness", "Parteners"]} onLogin={handleOnLogin} />
      <Container>
        <Hero
          title="Currency Converter"
          subTitle="Receive competitive and transparent pricing with no hidden spreads. See how we compare."
        />
        <CurrencyField
          amount={amount}
          currency={currency}
          currencies={assets}
          onChangeAmount={handleOnAmountChange}
          onCurrencyChange={handleOnCurrencyChange}
        />
        <TickerList tickers={tickers} isLoading={isLoading} />
      </Container>
    </>
  );
}

export default CurrencyConverter;
