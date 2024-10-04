import CurrencyItem, { CurrencyItemProps } from "./CurrencyItem";

interface CurrencyListProps {
  isLoading: boolean;
  fallbackText?: string;
  currencies?: CurrencyItemProps[];
}

const defaulText = "Enter an amount to check the rates.";

function CurrencyList({
  isLoading,
  fallbackText = defaulText,
  currencies = [],
}: CurrencyListProps) {
  if (isLoading) {
    return <span role="progressbar" />;
  }

  if (!currencies.length) {
    return <p>{fallbackText}</p>;
  }

  return (
    <ul>
      {currencies.map(({ value, currency }, idx) => (
        <CurrencyItem key={`${currency.value}-${idx}`} currency={currency} value={value} />
      ))}
    </ul>
  );
}

export default CurrencyList;
