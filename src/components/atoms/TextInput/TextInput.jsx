/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

/* eslint-disable import/no-extraneous-dependencies */
export default function TextInput({
  inputType,
  label,
  id,
  value,
  handleChange,
}) {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type={inputType} onChange={handleChange} value={value} id={id} />
    </label>
  );
}

TextInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: "",
  id: "",
  value: "",
};
