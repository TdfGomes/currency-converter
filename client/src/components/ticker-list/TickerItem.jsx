import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";
import PropTypes from "prop-types";

function TickerItem({ value, currency }) {
  return (
    <li>
      <span>{value}</span>
      <CurrencyLabel value={currency} />
    </li>
  );
}

export const TickerItemProps = PropTypes.shape({
  value: PropTypes.number.isRequired,
  currency: Option.isRequired,
}).isRequired;

TickerItem.propTypes = TickerItemProps;

export default TickerItem;
