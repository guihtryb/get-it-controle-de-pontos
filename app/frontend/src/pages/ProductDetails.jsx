import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import BuyFeedbackModal from '../components/BuyFeedbackModal';
import BuyForm from '../components/BuyForm';
import Header from '../components/Header';
import Context from '../context/Context';
import '../styles/pages/ProductDetails.css';

export default function ProductDetails({ id }) {
  const [product, setProduct] = React.useState({});
  const [buyPaymentMethod, setBuyPaymentMethod] = React.useState('money');
  const [submitted, setSubmitted] = React.useState(false);
  const [submittedMessage, setSubmittedMessage] = React.useState('');
  const [feedbackBtnFunc, setFeedbackBtnFunc] = React.useState(() => {});
  const [feedbackBtnText, setFeedbackBtnText] = React.useState('');

  const history = useHistory();

  const { products, userPoints, userBalance } = React.useContext(Context);

  const getProduct = () => {
    const productDetails = products.find((productItem) => productItem.id === +id);
    setProduct(productDetails);
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  const goToCart = () => history.push('/user/cart');

  const goToDeposit = () => history.push('/user/deposit');

  const buyWithMoney = () => {
    setSubmittedMessage('Compra em dinheiro efetuada com sucesso!');
    setFeedbackBtnFunc(() => goToCart);
    setFeedbackBtnText('Ver Carrinho');
    setSubmitted(true);
  };

  const buyWithPoints = () => {
    setSubmittedMessage('Compra em pontos efetuada com sucesso!');
    setFeedbackBtnFunc(() => goToCart);
    setFeedbackBtnText('Ver Carrinho');
    setSubmitted(true);
  };

  const notAbleToBuyWithMoney = () => {
    setSubmittedMessage('Saldo insuficiente! Deseja realizar um depósito?');
    setFeedbackBtnText('Realizar depósito');
    setFeedbackBtnFunc(() => goToDeposit);
    setSubmitted(true);
  };

  const notAbleToBuyWithPoints = () => {
    setSubmittedMessage('Saldo de pontos insuficiente!');
    setFeedbackBtnText('Voltar');
    setSubmitted(true);
  };

  const validateBuyWithMoney = () => {
    if (userBalance >= product.price) {
      return buyWithMoney();
    }
    return notAbleToBuyWithMoney();
  };

  const validateBuyWithPoints = () => {
    if (userPoints >= product.pricePoints) {
      return buyWithPoints();
    }
    return notAbleToBuyWithPoints();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return buyPaymentMethod === 'money' ? validateBuyWithMoney() : validateBuyWithPoints();
  };

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
                onSubmit={handleSubmit}
                attributes={product.attributes}
                setBuyPaymentMethod={setBuyPaymentMethod}
                buyPaymentMethod={buyPaymentMethod}
              />
            )
          }
        </div>
      </main>
      { submitted && (
      <BuyFeedbackModal
        message={submittedMessage}
        handleClick={feedbackBtnFunc}
        btnText={feedbackBtnText}
        setShowModal={setSubmitted}
      />
      ) }
    </>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
