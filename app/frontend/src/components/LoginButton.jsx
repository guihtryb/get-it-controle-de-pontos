import React from 'react';
import '../styles/components/LoginButton.css'

export const LoginButton = () => {
  return (
    <button
      data-testid="login-btn"
      className="login-btn"
      type="button"
    >
      Login
    </button>
  );
};
