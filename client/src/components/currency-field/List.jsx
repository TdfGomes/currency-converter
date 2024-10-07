import { FixedSizeList } from "react-window";
import PropTypes from "prop-types";
import CurrencyLabel from "components/currency-label";
import { Option } from "components/prop-types";
import * as S from "./styles";

function ListItem({ style, isSelected, value, onChange }) {
  return (
    <div style={style} role="option" aria-selected={isSelected} onClick={onChange}>
      <CurrencyLabel value={value} />
    </div>
  );
}
function List({ options, id, selectedValue, onChange }) {
  return (
    <S.ListBox role="listbox" id={`${id}-listbox`} tabIndex={-1}>
      <FixedSizeList
        itemData={options}
        height={150}
        itemCount={options.length}
        itemSize={40}
        width={100}
      >
        {({ index, data, style }) => (
          <ListItem
            style={style}
            value={data[index]}
            onChange={onChange(data[index])}
            isSelected={data[index].value === selectedValue}
          />
        )}
      </FixedSizeList>
    </S.ListBox>
  );
}

List.propTypes = {
  options: PropTypes.arrayOf(Option).isRequired,
  id: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default List;
