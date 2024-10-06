import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import PropTypes from "prop-types";
import CurrencyLabel from "components/currency-label";
import Input from "./Input";
import { Option } from "components/prop-types";
import { useDebounce } from "hooks";
import { getDefaultValue } from "./api";
import * as S from "./styles";

function ListItem({ style, isSelected, value, onSelect }) {
  return (
    <div style={style} role="option" aria-selected={isSelected} onClick={onSelect}>
      <CurrencyLabel value={value} />
    </div>
  );
}

function Select({ value, name, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setValue] = useState(getDefaultValue(value, options));
  const [query, setQuery] = useState(selectedValue?.value);
  const debouncedQuery = useDebounce(query);
  const inputRef = useRef();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleOnSelect = useCallback(
    (value) => (e) => {
      e.preventDefault();

      onChange(value.value);
      setValue(value);
      toggleListBox(e);
    },
    [onChange],
  );

  const filteredOptions = useMemo(
    () => options.filter((opt) => new RegExp(debouncedQuery, "i").test(opt.label)),
    [options, debouncedQuery],
  );

  const toggleListBox = (e) => {
    e.preventDefault();

    setIsOpen((prevState) => !prevState);
  };

  const handleOnSearch = (e) => {
    setQuery(e.target.value);
  };

  const id = name.toLowerCase();

  return (
    <S.FieldSet>
      <S.Select
        role="combobox"
        id={id}
        value={selectedValue?.value}
        aria-controls={`${id}-listbox`}
        aria-haspopup="listbox"
        tabIndex={0}
        onClick={toggleListBox}
        aria-expanded={isOpen}
      >
        {!isOpen ? (
          <CurrencyLabel value={selectedValue} />
        ) : (
          <Input name="search-list" onChange={handleOnSearch} value={query} ref={inputRef} />
        )}
      </S.Select>
      {isOpen && (
        <S.ListBox role="listbox" id={`${id}-listbox`} tabIndex={-1}>
          <List
            itemData={filteredOptions}
            height={150}
            itemCount={filteredOptions.length}
            itemSize={40}
            width={90}
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
        </S.ListBox>
      )}
    </S.FieldSet>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(Option).isRequired,
};

export default Select;
