import "./App.css";
import TextInput from "./components/atoms/TextInput/TextInput";

function App() {
  return (
    <div className="form-fluid">
      <form>
        <div className="prescription">
          <h3>Authorisation</h3>
          <h4>Welcome!</h4>
        </div>
        <div className="inputs">
          <span>Username:</span>
          <br />
          <TextInput inputType="text" />
          <br />
          <span>Password:</span>
          <br />
          <TextInput inputType="password" />
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
