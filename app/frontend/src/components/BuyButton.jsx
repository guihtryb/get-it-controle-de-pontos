import PropTypes from 'prop-types';
import React from 'react';

export default function BuyButton({ method }) {
  return (
    <button type="submit" className={`details-buy-btn ${method}`}>Comprar</button>
  );
}

BuyButton.propTypes = {
  method: PropTypes.string.isRequired,
};
