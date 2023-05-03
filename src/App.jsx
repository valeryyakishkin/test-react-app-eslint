import { useState } from "react";
import "./App.css";
import TextInput from "./components/atoms/TextInput/TextInput";

function App() {
  const [textName, changeTextName] = useState("");
  const [textPassword, changeTextPassword] = useState("");

  const handleChangeName = (event) => {
    const val = event.target.value;
    changeTextName(val);
  };

  const handleChangePassword = (event) => {
    const val = event.target.value;
    changeTextPassword(val);
  };

  const handleChangeInputType = () => {
    const el = document.getElementById("password");
    if (el.type !== "password") {
      el.type = "password";
    } else {
      el.type = "text";
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const reg =
      /([a-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const el = document.getElementById("username");
    if (!reg.test(el.value)) {
      el.style.border = "solid 2px red";
    } else {
      el.style.border = "solid 2px green";
    }
  };

  return (
    <div className="form-fluid">
      <form>
        <div className="prescription">
          <h3>Authorisation</h3>
          <h4>Welcome!</h4>
        </div>
        <div className="inputs">
          <TextInput
            inputType="text"
            label="Username:"
            id="username"
            value={textName}
            handleChange={handleChangeName}
          />
          <br />
          <TextInput
            inputType="password"
            label="Password:"
            id="password"
            value={textPassword}
            handleChange={handleChangePassword}
          />
          <button onClick={handleChangeInputType} id="eye" type="button">
            Eye
          </button>
        </div>
        <div className="extra-field">
          <div>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <a href="/">Forgot a password?</a>
        </div>
        <br />
        <div className="form-button">
          <button id="submit" type="submit" onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
