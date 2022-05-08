import React from 'react';
import { screen } from '@testing-library/react';
import App from '../../App';
import renderWithRouter from './utils/renderWithRouter';

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
    });
  });
});
