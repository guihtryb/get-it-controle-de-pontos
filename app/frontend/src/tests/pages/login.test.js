import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Tela de login', () => {
  describe('Deve possuir um header que', () => {
    it('possui um atributo data-testid igual a `get-it-header`', () => {
      renderWithRouter(<App />);

      const headerElement = screen.getByTestId('get-it-header');

      expect(headerElement).toBeInTheDocument();
    });
    it('possui um elemento com o atributo `get-it-logo`', () => {
      renderWithRouter(<App />);

      const logoElement = screen.getByTestId('get-it-logo');

      expect(logoElement).toBeInTheDocument();
      expect(logoElement).toHaveTextContent('get it!');
    });
    it('possui um botão com o atributo `login-btn`', () => {
      renderWithRouter(<App />);

      const loginBtn = screen.getByTestId(`login-btn`);

      expect(loginBtn).toBeInTheDocument();
      expect(loginBtn).toHaveTextContent('Login');
      expect(loginBtn).toHaveAttribute('type', 'button');
    });
  });
  describe('Ao clicar no botão de login', () => {
    describe('deve abrir um modal que', () => {
      it('possui um data-testid `login-modal-container`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginModalContainer = screen.getByTestId('login-modal-container');

        expect(loginModalContainer).toBeInTheDocument();
        expect(loginModalContainer).toHaveStyle('display: flex')
      });
      it('possui um data-testid `login-modal`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginModal = screen.getByTestId('login-modal');

        expect(loginModal).toBeInTheDocument();
        expect(loginModal).toHaveStyle('display: block')
      });
      it('possui um botão para fechar o modal com o data-testid `close`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const closeButton = screen.getByRole('button', {
          name: 'X'
        });

        expect(closeButton).toBeInTheDocument();
        expect(closeButton).toHaveAttribute('type', 'button');

        fireEvent.click(closeButton);

        const loginModal = screen.getByTestId('login-modal');

        expect(loginModal).toHaveStyle('display: none')
      });
      it('possui um input de email com o data-testid `login-email-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const emailInput = screen.getByTestId('login-email-input');

        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute('type', 'email');
      });
      it('possui um input de password com o data-testid `login-password-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const passwordInput = screen.getByTestId('login-password-input');

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
      });
      it('possui um botão com o data-testid `login-submit-btn`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginSubmitBtn = screen.getByTestId('login-submit-btn');

        expect(loginSubmitBtn).toBeInTheDocument();
        expect(loginSubmitBtn).toHaveAttribute('type', 'submit');
      });
      it('possui um elemento com o data-testid `login-go-to-register`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginGoToRegister = screen.getByTestId('login-go-to-register');

        expect(loginGoToRegister).toBeInTheDocument();
        expect(loginGoToRegister).toHaveTextContent(/registre-se/i);
      });
      describe('Possibilita o usuário registrar-se e, ao clicar em registre-se abre um modal que', () => {
        it('possui um data-testid `register-modal-container`', () => {
          renderWithRouter(<App />);
  
          const loginBtn = screen.getByTestId(`login-btn`);
  
          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          const registerModalContainer = screen.getByTestId('register-modal-container');

          expect(registerModalContainer).toBeInTheDocument();
          expect(registerModalContainer).toHaveStyle('display: flex');
        });
        it('possui um data-testid `register-modal`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          const registerModal = screen.getByTestId('register-modal');

          expect(registerModal).toHaveStyle('display: block')
          });
        it('possui um input para nome completo com o data-testid `register-fullname-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-fullname-input`)).toBeInTheDocument();
        });
        it('possui um input para nome de usuário com o data-testid `register-username-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-username-input`)).toBeInTheDocument();
        });
        it('possui um input para de email com o data-testid `register-email-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-email-input`)).toBeInTheDocument();
        });
        it('possui um input para senha com o data-testid `register-password-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-password-input`)).toBeInTheDocument();
        });
        it('possui um botão com o data-testid `register-submit-btn`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          fireEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-submit-btn`)).toBeInTheDocument();
          expect(screen.getByTestId(`register-submit-btn`)).toHaveAttribute('type', 'submit');
        });
        it('possibilita o usuário voltar a tela de login através do elemento `voltar`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          fireEvent.click(loginBtn);

          expect(screen.getByTestId('register-go-to-login')).toBeInTheDocument();
          expect(screen.getByTestId('register-go-to-login')).toHaveTextContent(/voltar/i);
        });
      });
    });
  });
  describe('Deve Possuir uma parte descritiva', () => {
    it('que possui o atributo data-testid="login-main"', () => {
      renderWithRouter(<App />);

      const loginMain = screen.getByTestId('login-main');

      expect(loginMain).toBeInTheDocument();
    });
    it('com um elemento que possui o atributo data-testid="typing-span"', () => {
      renderWithRouter(<App />);

      const typingSpan = screen.getByTestId('typing-span');

      expect(typingSpan).toBeInTheDocument();
    });
  });
});
