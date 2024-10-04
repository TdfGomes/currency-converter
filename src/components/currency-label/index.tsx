import { Option } from "components/types";

function CurrencyLabel({ value }: { value?: Option }) {
  return (
    <div>
      <img src={`${value?.value}`} alt={`img-for-${value?.value}`} />
      <span>{value?.label}</span>
    </div>
  );
}

export default CurrencyLabel;
