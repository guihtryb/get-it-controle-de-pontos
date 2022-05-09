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
    </>
  );
};

export default Login;
