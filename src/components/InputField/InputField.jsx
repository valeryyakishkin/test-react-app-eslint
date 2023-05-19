import { useSelector } from "react-redux";
import ShowPassBtn from "../ShowPassBtn/ShowPassBtn";

function InputField({
  label,
  value,
  handleInput,
  initialType,
  type,
  showPass,
  toggleViewPass,
}) {
  const userData = useSelector((state) => state.authInput.inputValues);
  return (
    <div>
      <label className="auth-label">
        {label}
        <input
          type={type}
          autoComplete="off"
          placeholder={label}
          className="auth-input"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
        />
        {initialType === "password" ? (
          <ShowPassBtn showPass={showPass} toggleViewPass={toggleViewPass} />
        ) : (
          ""
        )}
      </label>
      <div className="errorMessage">{userData}</div>
    </div>
  );
}

export default InputField;
