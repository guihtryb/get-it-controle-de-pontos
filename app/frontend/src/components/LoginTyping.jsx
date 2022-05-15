import React from 'react';

import '../styles/components/LoginTyping.css';

function LoginTyping() {
  return (
    <span data-testid="typing-span" className="typing-span">
      Troque
      {' '}
      <span className="span-points">pontos</span>
      {' '}
      por produtos exclusivos!
    </span>
  );
}

export default LoginTyping;
