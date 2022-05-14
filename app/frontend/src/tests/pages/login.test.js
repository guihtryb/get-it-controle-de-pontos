import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../../App';
import renderWithRouter from '../helper/renderWithRouter';
import { invalidUser,  users } from '../mocks/user';
import userEvent from '@testing-library/user-event';
let service =  require('../../services/requests');

describe('Testando página Login', () => {
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
      afterEach(() => jest.clearAllMocks());
      it('possui um data-testid `login-modal-container`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginModalContainer = screen.getByTestId('login-modal-container');

        expect(loginModalContainer).toBeInTheDocument();
        expect(loginModalContainer).toHaveStyle('display: flex')
      });
      it('possui um data-testid `login-modal`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginModal = screen.getByTestId('login-modal');

        expect(loginModal).toBeInTheDocument();
        expect(loginModal).toHaveStyle('display: block')
      });
      it('possui um botão para fechar o modal com o data-testid `close`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const closeButton = screen.getByRole('button', {
          name: 'X'
        });

        expect(closeButton).toBeInTheDocument();
        expect(closeButton).toHaveAttribute('type', 'button');

        userEvent.click(closeButton);

        const loginModal = screen.getByTestId('login-modal');

        expect(loginModal).toHaveStyle('display: none')
      });
      it('possui um input de email com o data-testid `login-email-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const emailInput = screen.getByTestId('login-email-input');

        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute('type', 'email');
      });
      it('possui um input de password com o data-testid `login-password-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const passwordInput = screen.getByTestId('login-password-input');

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
      });
      it('possui um botão com o data-testid `login-submit-btn`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginSubmitBtn = screen.getByTestId('login-submit-btn');

        expect(loginSubmitBtn).toBeInTheDocument();
        expect(loginSubmitBtn).toHaveAttribute('type', 'submit');
      });
      it('retorna uma mensagem de erro caso o login seja inválido`', async () => {
        renderWithRouter(<App />);

        jest.spyOn(service, 'requestLogin').mockRejectedValue(new Error('Senha ou E-mail incorretos!'));

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginEmailInput = screen.getByTestId('login-email-input');
        const loginPasswordInput = screen.getByTestId('login-password-input');
        const loginSubmitBtn = screen.getByTestId('login-submit-btn');

        userEvent.type(loginEmailInput, invalidUser.email);
        userEvent.type(loginPasswordInput, invalidUser.password);

        await waitFor(async () => {
          await userEvent.click(loginSubmitBtn);
        });

        expect(await screen.findByTestId('login-error-message')).toBeInTheDocument();
      });
      it('permite o usuário realizar login caso dados de input sejam válidos`', async () => {
        renderWithRouter(<App />);

        jest.spyOn(service, 'requestLogin').mockResolvedValue(users[0].fullName, users[0].email);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginEmailInput = screen.getByTestId('login-email-input');
        const loginPasswordInput = screen.getByTestId('login-password-input');
        const loginSubmitBtn = screen.getByTestId('login-submit-btn');

        userEvent.type(loginEmailInput, users[0].email);
        userEvent.type(loginPasswordInput, users[0].password);

        await waitFor(async () => {
          await userEvent.click(loginSubmitBtn);
        });

        expect(screen.queryByTestId('login-error-message')).not.toBeInTheDocument();
        expect(screen.queryByText(/por favor, tente novamente./i)).not.toBeInTheDocument();
      });
      it('possui um elemento com o data-testid `login-go-to-register`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        userEvent.click(loginBtn);

        const loginGoToRegister = screen.getByTestId('login-go-to-register');

        expect(loginGoToRegister).toBeInTheDocument();
        expect(loginGoToRegister).toHaveTextContent(/registre-se/i);
      });
      describe('Possibilita o usuário registrar-se e, ao clicar em registre-se abre um modal que', () => {
        afterEach(() => jest.clearAllMocks());

        it('possui um data-testid `register-modal-container`', () => {
          renderWithRouter(<App />);
  
          const loginBtn = screen.getByTestId(`login-btn`);
  
          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          const registerModalContainer = screen.getByTestId('register-modal-container');

          expect(registerModalContainer).toBeInTheDocument();
          expect(registerModalContainer).toHaveStyle('display: flex');
        });
        it('possui um data-testid `register-modal`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          const registerModal = screen.getByTestId('register-modal');

          expect(registerModal).toHaveStyle('display: block')
          });
        it('possui um input para nome completo com o data-testid `register-fullname-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-fullname-input`)).toBeInTheDocument();
        });
        it('possui um input para nome de usuário com o data-testid `register-username-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-username-input`)).toBeInTheDocument();
        });
        it('possui um input para email com o data-testid `register-email-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-email-input`)).toBeInTheDocument();
        });
        it('possui um input para senha com o data-testid `register-password-input`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-password-input`)).toBeInTheDocument();
        });
        it('possui um botão com o data-testid `register-submit-btn`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          expect(screen.getByTestId(`register-submit-btn`)).toBeInTheDocument();
          expect(screen.getByTestId(`register-submit-btn`)).toHaveAttribute('type', 'submit');
        });
        it('retorna uma mensagem de erro caso o registro seja inválido`', async () => {
          renderWithRouter(<App />);

          jest.spyOn(service, 'requestRegister').mockRejectedValue(new Error('Este e-mail já possui uma conta!'));

          const loginBtn = screen.getByTestId(`login-btn`);
  
          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          const registerFullNameInput = screen.getByTestId('register-fullname-input');
          const registerUsernameInput = screen.getByTestId('register-username-input');
          const registerEmailInput = screen.getByTestId('register-email-input');
          const registerPasswordInput = screen.getByTestId('register-password-input');
          const registerSubmitBtn = screen.getByTestId('register-submit-btn');

          userEvent.type(registerFullNameInput, 'Jhon Doe');
          userEvent.type(registerUsernameInput, 'JhonDoe_01');
          userEvent.type(registerEmailInput, users[0].email); // Email já cadastrado
          userEvent.type(registerPasswordInput, 'superSecret');
          userEvent.click(registerSubmitBtn);

          await waitFor(async () => {
            await userEvent.click(registerSubmitBtn);
          });

          expect(await screen.findByTestId('register-error-message')).toBeInTheDocument();
        });
        it('realiza o registro corretamente caso os inputs sejam válidos`', async () => {
          renderWithRouter(<App />);

          jest.spyOn(service, 'requestRegister').mockResolvedValue(true);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

          const loginGoToRegister = screen.getByTestId('login-go-to-register');

          userEvent.click(loginGoToRegister);

          const registerFullNameInput = screen.getByTestId('register-fullname-input');
          const registerUsernameInput = screen.getByTestId('register-username-input');
          const registerEmailInput = screen.getByTestId('register-email-input');
          const registerPasswordInput = screen.getByTestId('register-password-input');
          const registerSubmitBtn = screen.getByTestId('register-submit-btn');

          userEvent.type(registerFullNameInput, 'John Doe');
          userEvent.type(registerUsernameInput, 'JohnDoe_01');
          userEvent.type(registerEmailInput, 'johndoe02@email.com');
          userEvent.type(registerPasswordInput, 'super secret');

          await waitFor(async () => await userEvent.click(registerSubmitBtn) );

          expect(screen.queryByTestId('register-error-message')).not.toBeInTheDocument();
          expect(await screen.findByTestId('register-success-message')).toBeInTheDocument();
        });
        it('possibilita o usuário voltar a tela de login através do elemento `voltar`', () => {
          renderWithRouter(<App />);

          const loginBtn = screen.getByTestId(`login-btn`);

          userEvent.click(loginBtn);

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
