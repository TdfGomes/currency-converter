import { SyntheticEvent, useState } from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  name: string;
  onChange: (e: string) => void;
  options: Option[];
}

const getDefaultValue = (defaultValue: string, options: Option[]) =>
  options.find(({ value, label }) => value === defaultValue || label === defaultValue);

function SelectedValue({ value }: { value?: Option }) {
  return (
    <div>
      <img src={`${value?.value}`} alt={`img-for-${value?.value}`} />
      <span>{value?.label}</span>
    </div>
  );
}
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
        <SelectedValue value={selectedValue} />
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
