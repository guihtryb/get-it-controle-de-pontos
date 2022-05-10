import { useContext } from 'react';
import Context from '../context/Context';
import { handleShowNewModalClick, setDisplay } from '../utilis';

import '../styles/components/RegisterModal.css';
import CloseButton from './CloseButton';

const RegisterModal = () => {
  const {
    setShowRegisterModal,
    showRegisterModal,
    setShowLoginModal
  } = useContext(Context);

  return (
    <section
      className="register-modal-container"
      data-testid="register-modal-container"
      style={{ display: setDisplay(showRegisterModal).container }}
    >
    <div
      data-testid="register-modal"
      className="register-modal"
      style={{ display: setDisplay(showRegisterModal).box }}
    >
      <CloseButton setShowModal={setShowRegisterModal} />
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="register-fullname-input">
          Nome Completo:
          <input
            data-testid="register-fullname-input"
            id="register-fullname-input"
            type="text"
          />
        </label>
        <label htmlFor="register-fullname-input">
          Username:
          <input
            data-testid="register-username-input"
            id="register-username-input"
            type="text"
          />
        </label>
        <label htmlFor="register-email-input">
          Email:
          <input
            data-testid="register-email-input"
            id="register-email-input"
            type="email"
          />
        </label>
        <label htmlFor="register-password-input">
          Senha:
          <input
          data-testid="register-password-input"
          id="register-password-input"
          type="password"
        />
        </label>
        <button data-testid="register-submit-btn" type="submit">
          Registrar
        </button>
      </form>
      <div className="register-go-to-login-container">
        <span
          data-testid="register-go-to-login"
          className="register-go-to-login"
          onClick={ () => handleShowNewModalClick(setShowRegisterModal, setShowLoginModal) }
        >
          Voltar
        </span>
      </div>
    </div>
  </section>
  );
};

export default RegisterModal;
