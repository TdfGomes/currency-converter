import CurrencyLabel from "components/currency-label";
import { Option } from "components/types";
import { SyntheticEvent, useState } from "react";

interface SelectProps {
  value: string;
  name: string;
  onChange: (e: string) => void;
  options: Option[];
}

const getDefaultValue = (defaultValue: string, options: Option[]) =>
  options.find(({ value, label }) => value === defaultValue || label === defaultValue);

function Select({ value, name, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setValue] = useState<Option | undefined>(getDefaultValue(value, options));

  const toggleListBox = (e: SyntheticEvent) => {
    e.preventDefault();

    setIsOpen((prevState) => !prevState);
  };

  const handleOnSelect = (value: Option) => (e: SyntheticEvent) => {
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
        aria-expanded={`${isOpen}`}
      >
        <CurrencyLabel value={selectedValue} />
      </button>
      {isOpen && (
        <ul role="listbox" id={`${id}-listbox`} tabIndex={-1}>
          {options.map(({ value, label }, idx) => (
            <li role="option" key={`${value}-${idx}`} onClick={handleOnSelect({ value, label })}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}

export default Select;
