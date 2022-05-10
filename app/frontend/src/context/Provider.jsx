import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const contextValue = {
    setShowLoginModal,
    showLoginModal,
    showRegisterModal,
    setShowRegisterModal,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}
