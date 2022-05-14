import React from 'react';
import '../styles/components/ProductsPageTitle.css';


export const ProductsPageTitle = ({ text }) => {
  return (
    <h1
      data-testid="products-userview-title"
      className="products-userview-title"
    >
      { text }
    </h1>
  );
};

export default ProductsPageTitle;
