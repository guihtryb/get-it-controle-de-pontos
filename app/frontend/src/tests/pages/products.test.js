import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import ProductsUserView from '../../pages/ProductsUserView';
import userEvent from '@testing-library/user-event';
import { users } from '../mocks/user'
let username =  require('../../utilis/getUsename');
let userPoints =  require('../../utilis/getUserPoints');

describe('Testando página ProductsUserView', () => {
  afterEach(() => jest.clearAllMocks());
  describe('Deve conter um header que', () => {
    beforeEach(() => {
      jest.spyOn(username, 'getUsername').mockReturnThis(users[0].userName);
      jest.spyOn(userPoints, 'getUserPoints').mockReturnThis(users[0].points);
    });  
    it('possui um atributo data-testid igual a `get-it-header`', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId('get-it-header')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `get-it-logo`', () => {
      renderWithRouter(<ProductsUserView />);


      expect(screen.getByTestId('get-it-logo')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `username-span` com o nome de usuário', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId('username-span')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `user-points` com os pontos do usuário', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId(`user-points`)).toBeInTheDocument();
    });
    it('possui um botão com o atributo data-testid=`logout-btn` e texto igual a `Sair`', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId(`logout-btn`)).toBeInTheDocument();
      expect(screen.getByTestId(`logout-btn`)).toHaveTextContent('Sair');
    });
    describe('Ao clicar no botão de data-testid igual a `logout-btn', () => {
      it('O usuário retorna para a página de Login', () => {
       const { history } = renderWithRouter(<ProductsUserView />);
      
      const logOutBtn = screen.getByTestId(`logout-btn`);

      userEvent.click(logOutBtn);

      const { pathname } = history.location;
      
      expect(pathname).toBe('/login');
      });
    })
  });
});
