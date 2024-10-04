import CurrencyLabel from "components/currency-label";
import { Option } from "components/types";

export interface CurrencyItemProps {
  value: number;
  currency: Option;
}

function CurrencyItem({ value, currency }: CurrencyItemProps) {
  return (
    <li>
      <span>{value}</span>
      <CurrencyLabel value={currency} />
    </li>
  );
}

export default CurrencyItem;
