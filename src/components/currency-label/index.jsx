import { Option } from "components/prop-types";

function CurrencyLabel({ value }) {
  return (
    <div>
      <img src={`${value?.value}`} alt={`img-for-${value?.value}`} />
      <span>{value?.label}</span>
    </div>
  );
}

CurrencyLabel.propTypes = {
  value: Option.isRequired,
};

export default CurrencyLabel;
