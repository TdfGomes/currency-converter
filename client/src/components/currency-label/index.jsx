import { Option } from "components/prop-types";

function CurrencyLabel({ value }) {
  return (
    <div>
      <img loading="lazy" src={`${value?.imgSrc}`} alt={`img-for-${value?.value}`} />
      <span>{value?.label}</span>
    </div>
  );
}

CurrencyLabel.propTypes = {
  value: Option,
};

export default CurrencyLabel;
