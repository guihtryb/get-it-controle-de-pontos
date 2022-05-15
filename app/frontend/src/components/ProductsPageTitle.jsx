import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/ProductsPageTitle.css';
import { getUserRole } from '../utilis';

function ProductsPageTitle({ text }) {
  const role = getUserRole();
  return (
    <h1
      className={`products-${role}view-title`}
    >
      { text }
    </h1>
  );
}

ProductsPageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProductsPageTitle;
