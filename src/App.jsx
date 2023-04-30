import "./App.css";
import InputUserName from "./components/atoms/InputUsername/InputUsername";

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
          <input id="username" type="text" />
          <InputUserName name="Boby Singer" />
          <br />
          <span>Password:</span>
          <br />
          <input type="password" />
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
