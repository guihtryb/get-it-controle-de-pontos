import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import LoginTyping from "../components/LoginTyping";
import '../styles/pages/Login.css'

const Login = () => {
  return (
    <>
      <Header />
      <main data-testid="login-main">
        <LoginTyping />
        <LoginImage />
      </main>
      <div data-testid="login-modal">
      <form>
        <label htmlFor="login-email-input">
          Email:
          <input  data-testid="login-email-input" id="login-email-input" type="email" />
        </label>
        <label htmlFor="login-password-input">
          Senha:
          <input  data-testid="login-password-input" id="login-password-input" type="password" />
        </label>
        <button data-testid="login-submit-btn" type="submit">submit</button>
      </form>
      </div>
    </>
  );
};

export default Login;
