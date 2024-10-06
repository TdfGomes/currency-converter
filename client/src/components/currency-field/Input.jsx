import { forwardRef } from "react";
import * as S from "./styles";

function Input({ name, value, onChange, type = "text" }, ref) {
  return (
    <S.Input
      ref={ref}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      id={name.toLowerCase()}
    />
  );
}

export default forwardRef(Input);
