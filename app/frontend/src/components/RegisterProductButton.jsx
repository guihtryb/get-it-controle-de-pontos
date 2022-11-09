import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/components/RegisterProductButton.css';
import { getUserRole } from '../utilis';

function RegisterProductButton() {
  const { setShowRegisterProductModal } = useContext(Context);
  const isDisable = getUserRole() === 'user';

  return (
    <button
      data-testid="new-product-btn"
      className="new-product-btn"
      onClick={() => setShowRegisterProductModal(true)}
      type="button"
      disabled={isDisable}
    >
      Cadastrar produto
    </button>
  );
}

export default RegisterProductButton;
