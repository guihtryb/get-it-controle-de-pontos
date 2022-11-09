import React from 'react';
import Header from '../components/Header';
import LoginImage from '../components/LoginImage';
import LoginModal from '../components/LoginModal';
import LoginTyping from '../components/LoginTyping';
import RegisterModal from '../components/RegisterModal';

import '../styles/pages/Login.css';

function Login() {
  return (
    <>
      <Header
        page="login"
      />
      <main data-testid="login-main">
        <LoginTyping />
        <LoginImage />
      </main>
      <LoginModal />
      <RegisterModal />
    </>
  );
}

export default Login;
