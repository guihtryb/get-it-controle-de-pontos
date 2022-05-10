import { useContext, useState } from 'react';
import Context from '../context/Context';
import { handleShowNewModalClick, setDisplay } from '../utilis';
import CloseButton from './CloseButton';

import '../styles/components/RegisterModal.css';
import { Redirect } from 'react-router-dom';



const RegisterModal = () => {
  const {
    setShowRegisterModal,
    showRegisterModal,
    setShowLoginModal,
  } = useContext(Context);

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const registerNewUser = async (rota, data) => {
    console.log(
      `usuario registrado com método POST na rota ${rota}`,
      `--------------------------------------------------`,
      `Informações de novo usuário:
        Nome Completo: ${data.fullName}
        username: ${data.username}
        Email: ${data.email}
      `
    );
  }
  
  const register = async (e) => {
    e.preventDefault();

    try {
    const newUserData = {
      fullName,
      username,
      email,
      password
    }
  
    const newUser /* { token, newUserData } */ = await registerNewUser('/users', newUserData);

    localStorage.setItem('user', newUser);
    setIsRegistered(true);
    } catch (error) {
      setIsRegistered(false);
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
        <label htmlFor="register-fullname-input">
          Username:
          <input
            data-testid="register-username-input"
            id="register-username-input"
            type="text"
            value={username}
            onChange={({ target: {value }}) => setUsername(value)}
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
