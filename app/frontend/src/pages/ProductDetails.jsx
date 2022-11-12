import PropTypes from 'prop-types';
import React from 'react';
import Context from '../context/Context';

export default function ProductDetails({ id }) {
  const [product, setProduct] = React.useState({});
  const { products } = React.useContext(Context);

  React.useEffect(() => {
    const productDetails = products.find((productItem) => productItem.id === +id);
    setProduct(productDetails);
  }, []);

  if (!product) return (<h1>Product not found</h1>);

  return (
    <div>
      <h1>
        Nome:
        {' '}
        {product.title}
      </h1>
      <h1>
        imagem Link:
        {' '}
        {product.image}
      </h1>
      <h1>
        Atributos:
      </h1>
      <h1>
        preço:
        {' '}
        {product.price}
      </h1>
      <h1>
        preço em pontos:
        {' '}
        {product.pricePoints}
      </h1>
    </div>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
