import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Tela de login', () => {
  describe('deve possuir um header que', () => {
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
      it('possui um data-testid `login-modal`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginModal = screen.getByTestId('login-modal');

        expect(loginModal).toBeInTheDocument();
      });
      it('possui um input de email com o data-testid `login-email-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const emailInput = screen.getByTestId('login-email-input');

        expect(emailInput).toBeInTheDocument();
      });
      it('possui um input de password com o data-testid `login-password-input`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const passwordInput = screen.getByTestId('login-password-input');

        expect(passwordInput).toBeInTheDocument();
      });
      it('possui um botão com o data-testid `login-submit-btn`', () => {
        renderWithRouter(<App />);

        const loginBtn = screen.getByTestId(`login-btn`);

        fireEvent.click(loginBtn);

        const loginSubmitBtn = screen.getByTestId('login-submit-btn');

        expect(loginSubmitBtn).toBeInTheDocument();
        expect(loginSubmitBtn).toHaveAttribute('type', 'submit');

      });
      it('possui um link com o data-testid `login-go-to-register`', () => {

      });
    })
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
