import PropTypes from 'prop-types';
import React from 'react';
import BuyForm from '../components/BuyForm';
import Header from '../components/Header';
import ProductAttributes from '../components/ProductAttributes';
import Context from '../context/Context';

export default function ProductDetails({ id }) {
  const [product, setProduct] = React.useState({});
  const { products } = React.useContext(Context);

  React.useEffect(() => {
    const productDetails = products.find((productItem) => productItem.id === +id);
    setProduct(productDetails);
  }, []);

  if (!product) {
    return (
      <>
        <Header page="userView" />
        <main>
          <h1>Product not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Header page="userView" />
      <main>
        <div className="details-col-1">
          <img src={product.image} alt={`${product.title} preview`} />
        </div>

        <div className="details-col-2">
          <h1>{ product.title }</h1>
          {
            product.attributes && product.attributes.map(
              (attribute) => (
                <ProductAttributes
                  key={attribute.name}
                  data={attribute.data}
                  name={attribute.name}
                />
              ),
            )
          }

          <h2>Método de pagamento:</h2>
          <BuyForm />
        </div>
      </main>
    </>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
