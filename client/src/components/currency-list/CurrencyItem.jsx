import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";
import PropTypes from "prop-types";

function CurrencyItem({ value, currency }) {
  return (
    <li>
      <span>{value}</span>
      <CurrencyLabel value={currency} />
    </li>
  );
}

export const CurrencyItemProps = PropTypes.shape({
  value: PropTypes.number.isRequired,
  currency: PropTypes.arrayOf(Option).isRequired,
}).isRequired;

CurrencyItem.propTypes = CurrencyItemProps;

export default CurrencyItem;
