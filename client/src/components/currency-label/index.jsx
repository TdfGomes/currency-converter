import { Option } from "components/prop-types";
import * as S from "./styles";

function CurrencyLabel({ value }) {
  return (
    <S.CurrencyLabel>
      <img loading="lazy" src={`${value?.imgSrc}`} alt={`img-for-${value?.value}`} />
      <span>{value?.label}</span>
    </S.CurrencyLabel>
  );
}

CurrencyLabel.propTypes = {
  value: Option,
};

export default CurrencyLabel;
