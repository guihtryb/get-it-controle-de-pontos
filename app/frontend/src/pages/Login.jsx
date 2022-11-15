import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import LoginImage from '../components/LoginImage';
import LoginModal from '../components/LoginModal';
import LoginTyping from '../components/LoginTyping';
import RegisterModal from '../components/RegisterModal';

import '../styles/pages/Login.css';

function Login() {
  const history = useHistory();

  React.useEffect(() => {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user).user;
      if (user.role === 'user') {
        history.push('/user/products');
      } else {
        history.push('admin/products');
      }
    }
  }, []);

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
