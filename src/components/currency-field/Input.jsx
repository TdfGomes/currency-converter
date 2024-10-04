import PropTypes from "prop-types";

function Input({ name, value, onChange }) {
  return (
    <input type="text" onChange={onChange} value={value} name={name} id={name.toLowerCase()} />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
