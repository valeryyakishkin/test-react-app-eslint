function InputField({
  label,
  value,
  setValue,
  initialType,
  type,
  showPass,
  toggleViewPass,
  userData,
}) {
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
          onChange={(e) => setValue(e.target.value)}
        />
        {initialType === "password" ? (
          <button
            type="button"
            className={`showPass_btn ${!showPass ? "eye-off" : "eye"}`}
            onClick={toggleViewPass}
          />
        ) : (
          ""
        )}
      </label>
      <div className="errorMessage">{userData}</div>
    </div>
  );
}

export default InputField;
