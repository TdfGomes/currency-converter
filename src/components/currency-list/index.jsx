import PropTypes from "prop-types";
import CurrencyItem, { CurrencyItemProps } from "./CurrencyItem";

const defaulText = "Enter an amount to check the rates.";

function CurrencyList({ isLoading, fallbackText = defaulText, currencies = [] }) {
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

CurrencyList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fallbackText: PropTypes.string,
  currencies: PropTypes.arrayOf(CurrencyItemProps),
};

export default CurrencyList;
