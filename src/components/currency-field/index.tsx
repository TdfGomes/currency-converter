import { ChangeEvent } from "react";
import Input from "./Input";
import Select, { Option } from "./Select";

interface CurrencyFieldProps {
  amount: string;
  currency: string;
  currencies: Option[];
  onChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  onCurrencyChange: (e: string) => void;
}

function CurrencyField({
  amount,
  onChangeAmount,
  currency,
  onCurrencyChange,
  currencies,
}: CurrencyFieldProps) {
  return (
    <form>
      <Input name="currency-amount" value={amount} onChange={onChangeAmount} />
      <Select
        value={currency}
        onChange={onCurrencyChange}
        name="currencies-field"
        options={currencies}
      />
    </form>
  );
}

export default CurrencyField;
