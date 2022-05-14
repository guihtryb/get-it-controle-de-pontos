import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import ProductsAdminView from '../../pages/ProductsAdminView';
import userEvent from '@testing-library/user-event';
import { users } from '../mocks/user'
let username =  require('../../utilis/getUsename');

describe('Testando página ProductsAdminView', () => {
  afterEach(() => jest.clearAllMocks());
  describe('Deve conter um header que', () => {
    beforeEach(() => {
      jest.spyOn(username, 'getUsername').mockReturnThis(users[1].userName);
    });  
    it('possui um atributo data-testid igual a `get-it-header`', () => {
      renderWithRouter(<ProductsAdminView />);

      expect(screen.getByTestId('get-it-header')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `get-it-logo`', () => {
      renderWithRouter(<ProductsAdminView />);


      expect(screen.getByTestId('get-it-logo')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `username-span` com o nome de usuário', () => {
      renderWithRouter(<ProductsAdminView />);

      expect(screen.getByTestId('username-span')).toBeInTheDocument();
    });
    it('possui um botão com o atributo data-testid="new-product-btn" com o texto `Cadastrar produto`', () => {
      renderWithRouter(<ProductsAdminView />);

      expect(screen.getByTestId(`new-product-btn`)).toBeInTheDocument();
      expect(screen.getByTestId(`new-product-btn`)).toHaveTextContent(/cadastrar produto/i);
    });
    it('possui um botão com o atributo data-testid=`logout-btn` e texto igual a `Sair`', () => {
      renderWithRouter(<ProductsAdminView />);

      expect(screen.getByTestId(`logout-btn`)).toBeInTheDocument();
      expect(screen.getByTestId(`logout-btn`)).toHaveTextContent('Sair');
    });
    describe('Ao clicar no botão de data-testid igual a `logout-btn', () => {
      it('O usuário retorna para a página de Login', () => {
        const { history } = renderWithRouter(<ProductsAdminView />);

        const logOutBtn = screen.getByTestId(`logout-btn`);

        userEvent.click(logOutBtn);

        const { pathname } = history.location;

        expect(pathname).toBe('/login');
      });
    });
    describe('Ao clicar em cadastrar novo produto abre um modal', () => {
      it('com o data-testid="register-product"', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product')).toBeInTheDocument();
      });
    describe('O modal por sua vez deve possuir os campos a serem preenchidos', () => {});
      it('Nome', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product-name')).toBeInTheDocument();
      });
      it('Imagem', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product-image')).toBeInTheDocument();
      });
      it('Preço', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product-price')).toBeInTheDocument();
      });
      it('Preço em pontos', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product-price-points')).toBeInTheDocument();
      });
      it('ToPointsConverter', () => {
        renderWithRouter(<ProductsAdminView />);

        expect(screen.getByTestId('register-product-converter')).toBeInTheDocument();
      });
      describe('Um botão para cadastro que', () => {
        it('possibilita cadastrar o novo produto ao ser clicado', () => {
          expect(screen.getByTestId('register-product-btn')).toBeInTheDocument();
        });
      });
    });
  });
  describe('Deve conter uma listagem de produtos que', () => {
    it('possui um h1 com o data-testid="products-adminview-title" e texto `Produtos cadastrados`', () => {
      renderWithRouter(<ProductsAdminView />);

      expect(screen.getByTestId('products-adminview-title')).toBeInTheDocument();
      expect(screen.getByRole('heading', {level: 1, name: /Produtos cadastrados/ })).toBeInTheDocument();
    });
    it('possui no mínimo 6 cards de produtos', async () => {
      renderWithRouter(<ProductsAdminView />);

      const productCards = await screen.findAllByTestId(/get-it-product/);
      expect(productCards.length).toBeGreaterThanOrEqual(6);
    });
    describe('cada card deve possuir', () => {
      it('uma imagem com o data-testid igual a `product-img`', async () => {
      renderWithRouter(<ProductsAdminView />);

      expect((await screen.findAllByTestId(/product-img/)).length).toBeGreaterThanOrEqual(6);
      });
      describe('com a opção de deletar ou editar', () => {
        it('tendo um botão de delete com o data-testid="delete-product"', async () => {
          renderWithRouter(<ProductsAdminView />);

          expect(await screen.findByTestId('delete-product')).toBeInTheDocument();
        });
        it('tendo um botão de edit com o data-testid="edit-product"', async () => {
          renderWithRouter(<ProductsAdminView />);

          expect(await screen.findByTestId('edit-product')).toBeInTheDocument();

          const getItPointsBtn = await screen.findByTestId('edit-product');

          expect(getItPointsBtn).toBeDisabled();
        });
      });
    }); 
  }); 
});