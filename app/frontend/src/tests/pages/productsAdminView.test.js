/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductsAdminView from '../../pages/ProductsAdminView';
import { users } from '../mocks/user';
import renderWithRouterAndContext from '../helper/renderWithRouterAndContext';
import products from '../../mocks/products';

const username = require('../../utilis/getUsename');
const role = require('../../utilis/getUserRole');
const userPoints = require('../../utilis/getUserPoints');

describe('Testando página ProductsAdminView', () => {
  let context = {};

  afterEach(() => {
    jest.clearAllMocks();
    context = {};
  });
  beforeEach(() => {
    jest.spyOn(username, 'getUsername').mockReturnValue(users[1].userName);
    jest.spyOn(userPoints, 'getUserPoints').mockReturnValue(users[1].points);
    jest.spyOn(role, 'getUserRole').mockReturnValue(users[1].role);
  });
  describe('Deve conter um header que', () => {
    it('possui um atributo data-testid igual a `get-it-header`', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByTestId('get-it-header')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `get-it-logo`', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByTestId('get-it-logo')).toBeInTheDocument();
    });
    it('possui um elemento com o atributo data-testid igual a `username-span` com o nome de usuário', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByTestId('username-span')).toBeInTheDocument();
    });
    it('possui um botão com o atributo data-testid="new-product-btn" com o texto `Cadastrar produto`', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByTestId('new-product-btn')).toBeInTheDocument();
      expect(screen.getByTestId('new-product-btn')).toHaveTextContent(/cadastrar produto/i);
    });
    it('possui um botão com o atributo data-testid=`logout-btn` e texto igual a `Sair`', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByTestId('logout-btn')).toBeInTheDocument();
      expect(screen.getByTestId('logout-btn')).toHaveTextContent('Sair');
    });
    describe('Ao clicar no botão de data-testid igual a `logout-btn', () => {
      context = {
        showRegisterProductModal: false,
      };
      it('O usuário retorna para a página de Login', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        const { history } = renderWithRouterAndContext(<ProductsAdminView />, context);

        const logOutBtn = screen.getByTestId('logout-btn');

        userEvent.click(logOutBtn);

        const { pathname } = history.location;

        expect(pathname).toBe('/login');
      });
    });
    describe('Ao clicar em cadastrar novo produto abre um modal', () => {
      it('com o data-testid="register-product-modal"', () => {
        context = {
          showRegisterProductModal: true,
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };
        renderWithRouterAndContext(<ProductsAdminView />, context);
        expect(screen.getByTestId('register-product-modal')).toBeInTheDocument();
      });
      describe('O modal por sua vez deve possuir os campos a serem preenchidos', () => {});
      it('Título', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect(screen.getByTestId('register-product-title')).toBeInTheDocument();
      });
      it('Imagem', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect(screen.getByTestId('register-product-image')).toBeInTheDocument();
      });
      it('Preço', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect(screen.getByTestId('register-product-price')).toBeInTheDocument();
      });
      it('Preço em pontos', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect(screen.getByTestId('register-product-price-points')).toBeInTheDocument();
      });
      it('ToPointsConverter', () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect(screen.getByTestId('register-product-converter')).toBeInTheDocument();
      });
      describe('Um botão para cadastro que', () => {
        it('possibilita cadastrar o novo produto ao ser clicado', () => {
          context = {
            products,
            setShowEditProductModal: () => ({ showDeleteProductModal: false }),
            setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
            setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
          };

          renderWithRouterAndContext(<ProductsAdminView />, context);

          expect(screen.getByTestId('register-product-btn')).toBeInTheDocument();
        });
      });
    });
  });
  describe('Deve conter uma listagem de produtos que', () => {
    it('possui um h1 com o texto `Produtos cadastrados`', () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };
      role.getUserRole();
      renderWithRouterAndContext(<ProductsAdminView />, context);

      expect(screen.getByRole('heading', { level: 1, name: /Produtos cadastrados/ })).toBeInTheDocument();
    });
    it('possui no mínimo 6 cards de produtos', async () => {
      context = {
        products,
        setShowEditProductModal: () => ({ showDeleteProductModal: false }),
        setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
        setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
      };

      renderWithRouterAndContext(<ProductsAdminView />, context);

      const productCards = await screen.findAllByTestId(/get-it-product/);
      expect(productCards.length).toBeGreaterThanOrEqual(6);
    });
    describe('cada card deve possuir', () => {
      it('uma imagem com o data-testid igual a `product-img`', async () => {
        context = {
          products,
          setShowEditProductModal: () => ({ showDeleteProductModal: false }),
          setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
          setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
        };

        renderWithRouterAndContext(<ProductsAdminView />, context);

        expect((await screen.findAllByTestId(/product-img/)).length).toBeGreaterThanOrEqual(6);
      });
      describe('com a opção de deletar ou editar', () => {
        it('tendo um botão de delete com o data-testid="delete-product"', async () => {
          context = {
            products,
            setShowEditProductModal: () => ({ showDeleteProductModal: false }),
            setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
            setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
          };

          renderWithRouterAndContext(<ProductsAdminView />, context);

          expect(await screen.findByTestId('delete-product-1')).toBeInTheDocument();
        });
        it('tendo um botão de edit com o data-testid="edit-product"', async () => {
          context = {
            products,
            setShowEditProductModal: () => ({ showDeleteProductModal: false }),
            setShowDeleteProductModal: () => ({ showDeleteProductModal: false }),
            setShowRegisterProductModal: () => ({ showRegisterProductModal: false }),
          };

          renderWithRouterAndContext(<ProductsAdminView />, context);

          expect(await screen.findByTestId('edit-product-1')).toBeInTheDocument();
        });
      });
    });
  });
});
