import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

import { handleShowNewModalClick, setDisplay } from '../utilis';
import CloseButton from './CloseButton';
import { requestRegister } from '../services/requests';
import invalidInput from '../validations/register';
import errorMessages from '../validations/errorMessages';

import '../styles/components/RegisterModal.css';

function RegisterModal() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [failedRegistering, setFailedRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    setShowRegisterUserModal,
    showRegisterUserModal,
    setShowLoginModal,
  } = useContext(Context);

  useEffect(() => {
    setFailedRegistering(false);
    setIsRegistered(false);
  }, [fullName, username, email, password]);

  const register = async (e) => {
    e.preventDefault();

    const inputs = [fullName, username, email, password];

    let error = invalidInput(...inputs);

    if (error) {
      setFailedRegistering(true);

      setErrorMessage(error);

      return;
    }

    try {
      const endpoint = '/users';

      await requestRegister(endpoint, {
        fullName, username, email, password,
      });

      setIsRegistered(true);
    } catch (err) {
      const errorCode = err.toString().slice(-3);

      error = errorMessages[errorCode]
        ? errorMessages[errorCode] : errorMessages.defaultMessage;

      setFailedRegistering(true);

      setErrorMessage(error);
    }
  };

  const sucessRegisterMessage = 'Usuário cadastrado! Volte e faça login normalmente.';

  return (
    <section
      className="register-modal-container"
      data-testid="register-modal-container"
      style={{ display: setDisplay(showRegisterUserModal).container }}
    >
      <div
        data-testid="register-modal"
        className="register-modal"
        style={{ display: setDisplay(showRegisterUserModal).box }}
      >
        <CloseButton setShowModal={setShowRegisterUserModal} />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="register-fullname-input">
            Nome Completo:
            <input
              data-testid="register-fullname-input"
              id="register-fullname-input"
              type="text"
              value={fullName}
              onChange={({ target: { value } }) => setFullName(value)}
            />
          </label>
          <label htmlFor="register-username-input">
            Username:
            <input
              data-testid="register-username-input"
              id="register-username-input"
              type="text"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
          </label>
          <label htmlFor="register-email-input">
            Email:
            <input
              data-testid="register-email-input"
              id="register-email-input"
              type="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </label>
          <label htmlFor="register-password-input">
            Senha:
            <input
              data-testid="register-password-input"
              id="register-password-input"
              type="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </label>
          {
          (failedRegistering)
            ? (
              <p
                data-testid="register-error-message"
                className="register-error-message"
              >
                {
                  (`${errorMessage}`).replace('Error:', '')
                }
              </p>
            ) : null
        }
          {
          (isRegistered)
            ? (
              <p
                data-testid="register-success-message"
                className="register-success-message"
              >
                { sucessRegisterMessage }
              </p>
            ) : null
        }
          <button
            data-testid="register-submit-btn"
            type="submit"
            onClick={(e) => register(e)}
          >
            Registrar
          </button>
        </form>
        <div className="register-go-to-login-container">
          <button
            type="button"
            data-testid="register-go-to-login"
            className="register-go-to-login"
            onClick={() => handleShowNewModalClick(setShowRegisterUserModal, setShowLoginModal)}
          >
            Voltar
          </button>
        </div>
      </div>
    </section>
  );
}

export default RegisterModal;
