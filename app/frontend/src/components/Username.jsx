import React from 'react';
import '../styles/components/Username.css';
import { getUsername } from '../utilis';

function Username() {
  return (
    <span
      data-testid="username-span"
      className="username-span"
    >
      {`Olá, ${getUsername()}!`}
    </span>
  );
}

export default Username;
