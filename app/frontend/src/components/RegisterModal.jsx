import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { handleShowNewModalClick, setDisplay } from '../utilis';
import CloseButton from './CloseButton';
import { Redirect } from 'react-router-dom';

import '../styles/components/RegisterModal.css';
import { requestRegister } from '../services/requests';



const RegisterModal = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [failedRegistering, setFailedRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    setShowRegisterModal,
    showRegisterModal,
    setShowLoginModal,
  } = useContext(Context);



  useEffect(() => {
    setFailedRegistering(false);
  }, [fullName, username, email, password]);


  const register = async (e) => {
    e.preventDefault();

    try {
      const newUserData = [
        fullName,
        username,
        email,
        password
      ];

      const newUser /* { token, newUserData } */ = await requestRegister(...newUserData);

      localStorage.setItem('user', JSON.stringify(newUser));

      setIsRegistered(true);
    } catch (error) {
      setFailedRegistering(true);
      setErrorMessage(error);
    }
  };

  if (isRegistered) return <Redirect to="/products" />

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
            value={fullName}
            onChange={({ target: {value }}) => setFullName(value)}
          />
        </label>
        <label htmlFor="register-username-input">
          Username:
          <input
            data-testid="register-username-input"
            id="register-username-input"
            type="text"
            value={username}
            onChange={({ target: { value }}) => setUsername(value)}
          />
        </label>
        <label htmlFor="register-email-input">
          Email:
          <input
            data-testid="register-email-input"
            id="register-email-input"
            type="email"
            value={email}
            onChange={({ target: {value }}) => setEmail(value)}
          />
        </label>
        <label htmlFor="register-password-input">
          Senha:
          <input
          data-testid="register-password-input"
          id="register-password-input"
          type="password"
          value={password}
          onChange={({ target: { value }}) => setPassword(value)}
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
        <button
          data-testid="register-submit-btn"
          type="submit"
          onClick={ (e) => register(e)}
        >
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
