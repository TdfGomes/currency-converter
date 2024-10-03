import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  defaultValue: string;
  name: string;
  onChange: (e: string) => void;
  options: Option[];
}

const getDefaultValue = (defaultValue: string, options: Option[]) =>
  options.find(({ value, label }) => value === defaultValue || label === defaultValue);

function Select({ defaultValue, name, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setValue] = useState<Option | undefined>(
    getDefaultValue(defaultValue, options),
  );

  const toggleListBox = () => setIsOpen((prevState) => !prevState);

  const handleOnSelect = (value: Option) => () => {
    onChange(value.value);
    setValue(value);
  };

  const id = name.toLowerCase();

  return (
    <fieldset>
      <button
        role="combobox"
        id={id}
        value={selectedValue?.value}
        defaultValue={defaultValue}
        aria-controls={`${id}-listbox`}
        aria-haspopup="listbox"
        tabIndex={0}
        onClick={toggleListBox}
        aria-expanded={`${isOpen}`}
      >
        {selectedValue?.label}
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
