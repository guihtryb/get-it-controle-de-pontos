import { useContext } from 'react';
import Context from '../context/Context';
import { setDisplay, handleShowNewModalClick } from '../utilis';
import CloseButton from './CloseButton';

import '../styles/components/LoginModal.css';
import { useHistory } from 'react-router-dom';

const LoginModal = () => {
  const {
    setShowLoginModal,
    showLoginModal,
    setShowRegisterModal,
  } = useContext(Context);

  const history = useHistory();

  return (
    <section
      className="login-modal-container"
      data-testid="login-modal-container"
      style={{ display: setDisplay(showLoginModal).container }}
    >
    <div
      data-testid="login-modal"
      className="login-modal"
      style={{ display: setDisplay(showLoginModal).box }}
    >
      <CloseButton setShowModal={setShowLoginModal} />
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="login-email-input">
          Email:
          <input
            data-testid="login-email-input"
            id="login-email-input"
            type="email"
          />
        </label>
        <label htmlFor="login-password-input">
          Senha:
          <input
          data-testid="login-password-input"
          id="login-password-input"
          type="password"
        />
        </label>
        <button
          data-testid="login-submit-btn"
          type="submit"
          onClick={() => history.push('/products')}
        >
          Entrar
        </button>
      </form>
      <hr />
      <div className="login-go-to-register-container">
        <p>
          Não possui uma conta?
          <span
            data-testid="login-go-to-register"
            onClick={ () => handleShowNewModalClick(setShowLoginModal, setShowRegisterModal) }
          >
            Registre-se.
          </span>
        </p>
      </div>
    </div>
  </section>
  );
};

export default LoginModal;
