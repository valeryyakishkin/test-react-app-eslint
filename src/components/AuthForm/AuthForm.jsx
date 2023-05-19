import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../../store/AuthInputSlice";
import InputField from "../InputField/InputField";

function AuthForm({ userLabel, passLabel }) {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, changeViewPass] = useState(false);
  const dispatch = useDispatch();

  const toggleViewPass = () => {
    changeViewPass(!showPass);
  };

  const onSubmit = () => {
    dispatch(submitForm({ text, pass }));
    setText("");
    setPass("");
  };

  return (
    <form className="auth-form">
      <h1 className="auth-title">Добро пожаловать!</h1>
      <InputField
        label={userLabel}
        value={text}
        handleInput={setText}
        type="text"
      />
      <InputField
        label={passLabel}
        value={pass}
        handleInput={setPass}
        initialType="password"
        type={showPass ? "text" : "password"}
        showPass={showPass}
        toggleViewPass={toggleViewPass}
      />
      <button type="button" className="auth-btn" onClick={onSubmit}>
        войти
      </button>
    </form>
  );
}

export default AuthForm;
