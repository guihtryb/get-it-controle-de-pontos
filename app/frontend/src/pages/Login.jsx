import Header from "../components/Header";
import GetItLogo from "../components/GetItLogo";
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginModal from "../components/LoginModal";
import LoginTyping from "../components/LoginTyping";
import RegisterModal from "../components/RegisterModal";
import '../styles/pages/Login.css'

const Login = () => {
  return (
    <>
      <Header
        getItLogo={<GetItLogo key="getItLogo"/>}
        loginButto={<LoginButton key="loginButton"/>}
      />
      <main data-testid="login-main">
        <LoginTyping />
        <LoginImage />
      </main>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default Login;
