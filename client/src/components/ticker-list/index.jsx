import PropTypes from "prop-types";
import TickerItem, { TickerItemProps } from "./TickerItem";
import * as S from "./styles";

const defaulText = "Enter an amount to check the rates.";

function TickerList({ isLoading, fallbackText = defaulText, tickers = [] }) {
  if (isLoading) {
    return <S.LoadingSpinner role="progressbar" />;
  }

  if (!tickers.length) {
    return <S.P>{fallbackText}</S.P>;
  }

  return (
    <S.TickerList>
      {tickers.map(({ value, currency }, idx) => (
        <TickerItem key={`${currency.value}-${idx}`} currency={currency} value={value} />
      ))}
    </S.TickerList>
  );
}

TickerList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fallbackText: PropTypes.string,
  tickers: PropTypes.arrayOf(TickerItemProps),
};

export default TickerList;
