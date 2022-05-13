import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/LogOutButton.css'

const LogOutButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  }

  return (
    <button
    data-testid="logout-btn"
    className="logout-btn"
    onClick={ handleClick }
    >
      Sair
    </button>
  );
};

export default LogOutButton;
