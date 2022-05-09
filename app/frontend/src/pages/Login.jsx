import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import LoginModal from "../components/LoginModal";
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
      <LoginModal />
    </>
  );
};

export default Login;
