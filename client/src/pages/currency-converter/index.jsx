import { useState } from "react";
import { Container, CurrencyField, TickerList, Hero, Header, Footer } from "components";
import { useDebounce, useGetAssets, useGetTickers, useSearchParams } from "hooks";
import { FOOTER_LINKS, DISCLAIMERS } from "./constants";
import { isNumber } from "./api";

function CurrencyConverter() {
  const { setParam, getParam } = useSearchParams();
  const [amount, setAmount] = useState(getParam("amount") || "");
  const debouncedAmount = useDebounce(amount);
  const [currency, setCurrency] = useState(getParam("currency") || "USD");
  const { data: assets } = useGetAssets();
  const { data: tickers, isLoading } = useGetTickers(currency, debouncedAmount);

  const handleOnAmountChange = (e) => {
    const { value } = e.target;
    if (isNumber(value.trim())) {
      setAmount(value);
      setParam("amount", value);
    }
  };
  const handleOnCurrencyChange = (value) => {
    setCurrency(value);
    setParam("currency", value);
  };

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
      <Footer quickLinks={FOOTER_LINKS} disclaimers={DISCLAIMERS} />
    </>
  );
}

export default CurrencyConverter;
