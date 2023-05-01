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
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default App;
