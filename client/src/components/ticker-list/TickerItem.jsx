import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";
import PropTypes from "prop-types";
import { roundValue } from "./api";
import * as S from "./styles";

function TickerItem({ value, currency }) {
  return (
    <S.TickerItem>
      <span>{roundValue(value)}</span>
      <CurrencyLabel value={currency} />
    </S.TickerItem>
  );
}

export const TickerItemProps = PropTypes.shape({
  value: PropTypes.string.isRequired,
  currency: Option.isRequired,
}).isRequired;

TickerItem.propTypes = TickerItemProps;

export default TickerItem;
