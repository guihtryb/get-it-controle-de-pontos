import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import ProductsUserView from '../../pages/ProductsUserView';


describe('Testando página ProductsUserView', () => {
  describe('Deve conter um header que', () => {
    it('possui um atributo data-testid igual a `get-it-header`', () => {
      renderWithRouter(<ProductsUserView />);

      expect(screen.getByTestId('get-it-header')).toBeInTheDocument();
    });
  });
});
