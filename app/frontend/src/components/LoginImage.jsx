import React from 'react';
import loginImg from '../images/loginImg.jpg';

import '../styles/components/LoginImage.css';

function LoginImage() {
  return (
    <img src={loginImg} alt="man smiling while using a cellphone" className="login-image" />
  );
}

export default LoginImage;
