import { forwardRef } from "react";
import * as S from "./styles";

function Input({ name, value, onChange, type = "text", placeholder }, ref) {
  return (
    <S.Input
      ref={ref}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      id={name.toLowerCase()}
      placeholder={placeholder}
    />
  );
}

export default forwardRef(Input);
