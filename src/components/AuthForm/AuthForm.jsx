import { useState } from "react";
import InputField from "../InputField/InputField";

function AuthForm({ userLabel, passLabel }) {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [userData, setUserData] = useState({});
  const [showPass, changeViewPass] = useState(false);

  const toggleViewPass = () => {
    changeViewPass(!showPass);
  };

  const sumbitForm = () => {
    if (text.trim().length && pass.trim().length) {
      setUserData({
        userName: text,
        userPassword: pass,
      });
      setText("");
      setPass("");
    }
  };

  return (
    <form className="auth-form">
      <h1 className="auth-title">Добро пожаловать!</h1>
      <InputField
        label={userLabel}
        value={text}
        setValue={setText}
        type="text"
        userData={userData.userName}
      />
      <InputField
        label={passLabel}
        value={pass}
        setValue={setPass}
        initialType="password"
        type={showPass ? "text" : "password"}
        userData={userData.userPassword}
        showPass={showPass}
        toggleViewPass={toggleViewPass}
      />
      <button type="button" className="auth-btn" onClick={sumbitForm}>
        войти
      </button>
    </form>
  );
}

export default AuthForm;
