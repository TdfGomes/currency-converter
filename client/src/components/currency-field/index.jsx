import { useRef } from "react";
import Input from "./Input";
import Select from "./Select";
import { Option } from "components/prop-types";
import PropTypes from "prop-types";
import * as S from "./styles";

function CurrencyField({ amount, onChangeAmount, currency, onCurrencyChange, currencies }) {
  const inputRef = useRef();

  const handleOnClick = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  return (
    <S.CurrencyField onClick={handleOnClick}>
      <Input
        ref={inputRef}
        name="currency-amount"
        value={amount}
        onChange={onChangeAmount}
        placeholder="0.00"
      />
      <Select
        value={currency}
        onChange={onCurrencyChange}
        name="currencies-field"
        options={currencies}
      />
    </S.CurrencyField>
  );
}

CurrencyField.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(Option),
  onChangeAmount: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default CurrencyField;
