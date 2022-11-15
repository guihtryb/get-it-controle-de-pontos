/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getUserPoints, getUserRole } from '../utilis';
import DeleteButton from './DeleteButton';
import EditProductButton from './EditProductButton';
import GetItButton from './GetItButton';

import '../styles/components/ProductCard.css';

function ProductCard({ product, index }) {
  const [toolTip, setToolTip] = useState('none');

  const role = getUserRole();

  const ableToGet = product.pricePoints < getUserPoints();

  const toPointsConverter = 0.6; /* wip */

  const convert = () => {
    const pointsReturnedOnBuy = Math.round(toPointsConverter * product.price);
    return pointsReturnedOnBuy;
  };

  const showToolTip = () => {
    setToolTip('block');
  };

  const closeToolTip = () => {
    setToolTip('none');
  };

  return (
    <div
      data-testid={`get-it-product-${index}`}
      className="product-card"
    >
      <img
        src={product.image}
        alt={`${product.title} for sale`}
        data-testid={`product-img-${index}`}
        className="product-img"
      />
      <h3
        className="product-title"
      >
        { product.title }
      </h3>
      <span
        className="product-price-points"
      >
        { product.pricePoints }
        {' '}
        pts
      </span>
      <span
        style={{ fontFamily: 'Nunito' }}
      >
        Ou
      </span>
      <span
        className="product-price"
      >
        R$
        {' '}
        { product.price }
      </span>

      {
        role === 'user' ? (
          <>
            <Link to={`/user/product/${product.id}`} className="get-it-link">
              <button
                className="buy-btn"
                data-testid={`buy-btn-${index}`}
                onMouseLeave={closeToolTip}
                onMouseOver={showToolTip}
                type="button"
              >
                R$
                {' '}
                { product.price }
              </button>
            </Link>
            <hr />
            <GetItButton index={index} ableToGet={ableToGet} productId={product.id} />
            <div
              className="tooltip"
              style={{ display: toolTip }}
            >
              {` Essa compra retornará ${convert()} pontos`}
            </div>
          </>
        ) : (
          <div className="update-btns-container">
            <EditProductButton id={product.id} />
            <DeleteButton id={product.id} />
          </div>
        )
      }
    </div>
  );
}

ProductCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pricePoints: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
