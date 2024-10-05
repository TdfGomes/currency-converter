import { useState } from "react";
import PropTypes from "prop-types";
import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";
import { FixedSizeList as List } from "react-window";
import { getDefaultValue } from "./api";

function ListItem({ style, isSelected, value, onSelect }) {
  return (
    <li style={style} role="option" aria-selected={isSelected} onClick={onSelect}>
      <CurrencyLabel value={value} />
    </li>
  );
}

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
          <List
            itemData={options}
            height={150}
            itemCount={options.length}
            itemSize={35}
            width={300}
          >
            {({ index, data, style }) => (
              <ListItem
                style={style}
                value={data[index]}
                onSelect={handleOnSelect(data[index])}
                isSelected={data[index].value === selectedValue?.value}
              />
            )}
          </List>
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
