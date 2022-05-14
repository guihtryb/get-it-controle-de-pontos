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
    });
  });
  describe('Deve conter uma listagem de produtos que', () => {
    it('possui um h1 com o data-testid="products-userview-title" e texto `Ofertas disponíveis`', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId('products-userview-title')).toBeInTheDocument();
      expect(screen.getByRole('heading', {level: 1, name: /Ofertas disponíveis/ })).toBeInTheDocument();
    });
    it('possui no mínimo 6 cards de produtos', async () => {
      renderWithRouter(<ProductsUserView />);

      const productCards = await screen.findAllByTestId(/get-it-product/);
      expect(productCards.length).toBeGreaterThanOrEqual(6);
    });
    describe('cada card deve possuir', () => {
      it('uma imagem com o data-testid igual a `product-img`', async () => {
      renderWithRouter(<ProductsUserView />);

      expect((await screen.findAllByTestId(/product-img/)).length).toBeGreaterThanOrEqual(6);
      });
      describe('um botão para adicionar ao carrinho de data-testid="get-it-points-btn-0" que', () => {
        it('está habilitado caso seu saldo de pontos seja maior que o preço em pontos do produto', async () => {
          renderWithRouter(<ProductsUserView />);

          expect(await screen.findByTestId('get-it-points-btn-0')).toBeInTheDocument();
        });
        it('está desabilitado caso seu saldo de pontos seja menor que o preço em pontos do produto', async () => {
          renderWithRouter(<ProductsUserView />);

          expect(await screen.findByTestId('get-it-points-btn-3')).toBeInTheDocument();

          const getItPointsBtn = await screen.findByTestId('get-it-points-btn-3');

          expect(getItPointsBtn).toBeDisabled();
        });
      });
      describe('Efetiva a compra', () => {
        it('removendo dos produtos listados', async () => {
          // wip
        });
        it('decrescendo o preço do produto do saldo do usuário', async () => {
          // wip
        });
        it('adicionando ao carrinho do usuário', async () => {
          // wip
        });
      });
    });
  });
});