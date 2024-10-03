import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ name, value, onChange }: InputProps) {
  return (
    <input type="text" onChange={onChange} value={value} name={name} id={name.toLowerCase()} />
  );
}

export default Input;
