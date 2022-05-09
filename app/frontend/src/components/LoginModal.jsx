const LoginModal = () => {
  return (
    <section className="login-modal-container">
    <div data-testid="login-modal" className="login-modal">
      <form>
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
        <button data-testid="login-submit-btn" type="submit">submit</button>
      </form>
    </div>
  </section>
  );
};

export default LoginModal;
