import { useState } from "react";
import PropTypes from "prop-types";
import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";

const getDefaultValue = (defaultValue, options) =>
  options.find(({ value, label }) => value === defaultValue || label === defaultValue);

function Select({ value, name, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setValue] = useState(getDefaultValue(value, options));

  const toggleListBox = (e) => {
    e.preventDefault();

    setIsOpen((prevState) => !prevState);
  };

  const handleOnSelect = (value) => (e) => {
    e.preventDefault();

    onChange(value.value);
    setValue(value);
    toggleListBox(e);
  };

  const id = name.toLowerCase();

  return (
    <fieldset>
      <button
        role="combobox"
        id={id}
        value={selectedValue?.value}
        aria-controls={`${id}-listbox`}
        aria-haspopup="listbox"
        tabIndex={0}
        onClick={toggleListBox}
        aria-expanded={isOpen}
      >
        <CurrencyLabel value={selectedValue} />
      </button>
      {isOpen && (
        <ul role="listbox" id={`${id}-listbox`} tabIndex={-1}>
          {options.map(({ value, label }, idx) => (
            <li
              role="option"
              aria-selected={value === selectedValue?.value}
              key={`${value}-${idx}`}
              onClick={handleOnSelect({ value, label })}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(Option).isRequired,
};

export default Select;
