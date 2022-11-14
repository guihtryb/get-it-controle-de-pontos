import PropTypes from 'prop-types';
import React from 'react';
import BuyFeedbackModal from '../components/BuyFeedbackModal';
import BuyForm from '../components/BuyForm';
import Header from '../components/Header';
import Context from '../context/Context';
import '../styles/pages/ProductDetails.css';

export default function ProductDetails({ id }) {
  const [product, setProduct] = React.useState({});
  const [buyPaymentMethod, setBuyPaymentMethod] = React.useState('money');

  const { products } = React.useContext(Context);

  const getProduct = () => {
    const productDetails = products.find((productItem) => productItem.id === +id);
    setProduct(productDetails);
  };

  React.useEffect(() => {
    getProduct();
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

      <main className="product-details-main">

        <div className="details-col-1">
          <img src={product.image} alt={`${product.title} preview`} />
        </div>

        <div className="details-col-2">
          <h1>{ product.title }</h1>
          {
            buyPaymentMethod === 'money' ? (<h2>{`R$ ${product.price}`}</h2>) : (<h2>{`Pts ${product.pricePoints}`}</h2>)
          }
          {
            product.attributes && (
              <BuyForm
                attributes={product.attributes}
                setBuyPaymentMethod={setBuyPaymentMethod}
                buyPaymentMethod={buyPaymentMethod}
              />
            )
          }
        </div>
      </main>

      <BuyFeedbackModal />
    </>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
