import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/components/LogOutButton.css';

function LogOutButton() {
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();

    history.push('/login');
  };

  return (
    <button
      type="button"
      data-testid="logout-btn"
      className="logout-btn"
      onClick={handleClick}
    >
      Sair
    </button>
  );
}

export default LogOutButton;
