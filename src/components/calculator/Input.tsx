import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  defaultValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ defaultValue, name, onChange }: InputProps) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      id={name.toLowerCase()}
    />
  );
}

export default Input;
