import loginImg from "../images/loginImg.jpg"
import '../styles/components/LoginImage.css'

const LoginImage = () => {
  return (
    <img src={loginImg} alt="man smiling while using a cellphone" className="login-image"/>
  );
};

export default LoginImage;
