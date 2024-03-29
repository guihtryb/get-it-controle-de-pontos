import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';
import errorMessages from '../validations/errorMessages';
import { setDisplay, handleShowNewModalClick } from '../utilis';
import { requestLogin } from '../services/requests';
import CloseButton from './CloseButton';

import '../styles/components/LoginModal.css';

function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('');

  const login = async (e) => {
    e.preventDefault();

    try {
      const endpoint = '/login';

      const { user, token } = await requestLogin(endpoint, { email, password });

      setRole(user.role);

      localStorage.setItem('user', JSON.stringify({ user, token }));

      setIsLogged(true);
    } catch (err) {
      const errorCode = err.toString().slice(-3);

      const error = errorMessages[errorCode]
        ? errorMessages[errorCode] : errorMessages.defaultMessage;

      setFailedLogin(true);

      setErrorMessage(error);
    }
  };

  useEffect(() => {
    setFailedLogin(false);
  }, [email, password]);

  const {
    setShowLoginModal,
    showLoginModal,
    setShowRegisterUserModal,
  } = useContext(Context);

  if (isLogged) return <Redirect to={`/${role}/products`} />;

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
        <form>
          <label htmlFor="login-email-input">
            Email:
            <input
              data-testid="login-email-input"
              id="login-email-input"
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </label>
          <label htmlFor="login-password-input">
            Senha:
            <input
              data-testid="login-password-input"
              id="login-password-input"
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </label>
          {
          (failedLogin)
            ? (
              <p
                data-testid="login-error-message"
                className="login-error-message"
              >
                {
                  `${errorMessage}`
                }
              </p>
            ) : null
        }
          <button
            data-testid="login-submit-btn"
            type="submit"
            onClick={(e) => login(e)}
          >
            Entrar
          </button>
        </form>
        <hr />
        <div className="login-go-to-register-container">
          <p>
            Não possui uma conta?
            <button
              data-testid="login-go-to-register"
              onClick={() => handleShowNewModalClick(setShowLoginModal, setShowRegisterUserModal)}
              type="button"
            >
              Registre-se.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginModal;
