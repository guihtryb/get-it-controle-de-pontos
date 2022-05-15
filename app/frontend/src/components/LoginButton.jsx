import React, { useContext } from 'react';
import Context from '../context/Context';

import '../styles/components/LoginButton.css';

function LoginButton() {
  const { setShowLoginModal } = useContext(Context);

  return (
    <button
      data-testid="login-btn"
      className="login-btn"
      type="button"
      onClick={() => setShowLoginModal(true)}
    >
      Login
    </button>
  );
}

export default LoginButton;
