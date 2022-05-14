import React, { useState } from 'react';
import '../styles/components/ProductCard.css';
import { getUserPoints } from "../utilis";


const ProductCard = ({ product, index }) => {
  const toPointsConverter = 0.50; // wip - valor a ser atribuído no banco de dados

  const ableToGet = product.pricePoints < getUserPoints();

  const convert = () => {
    const pointsReturnedOnBuy = Math.round(toPointsConverter * product.price);
    return pointsReturnedOnBuy;
  }

  const [toolTip, setToolTip] = useState('none');

  const showToolTip = () => {
    setToolTip('block')
  };

  const closeToolTip = () => {
    setToolTip('none')
  };

  return (
    <div
      data-testid={`get-it-product-${index}`}
      className="product-card"
    >
      <img
        src={ product.image }
        alt={`${product.title} for sale`}
        data-testid={`product-img-${index}`}
        className="product-img"
      />
      <h3
        className='product-title'
      >
        { product.title }
      </h3>
      <span
        className='product-price-points'
      >
        { product.pricePoints } pts
      </span>
      <span
        style={{fontFamily: "Nunito"}}
      >
        Ou
      </span>
      <button
        data-testid={`buy-btn-${index}`}
        className="buy-btn"
        onMouseOver={ showToolTip }
        onMouseLeave={ closeToolTip }
      >
        R$ { product.price }
      </button>
      <hr />
      <button
        data-testid={`get-it-points-btn-${index}`}
        className={`get-it-points-btn able-to-get-${ableToGet}`}
        disabled={!ableToGet}
      >
        get it!
      </button>
      <div
        className="tooltip"
        style={{display: toolTip}}
      >
        {` Essa compra retornará ${convert()} pontos`}
      </div>
    </div>
  );
};

export default ProductCard;