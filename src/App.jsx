import AuthForm from "./components/AuthForm/AuthForm";
import logoImg from "./assets/logo.png";

function App() {
  const userLabel = "Имя пользователя";
  const passLabel = "Пароль";
  // const error = "error";

  return (
    <div className="App">
      <div className="container">
        <div className="auth">
          <div className="auth-logo">
            <img src={logoImg} alt="logo-img" className="logo-img" />
          </div>
          <AuthForm userLabel={userLabel} passLabel={passLabel} />
          <div>
            <a href="/#" className="auth-link">
              Забыли пароль?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
