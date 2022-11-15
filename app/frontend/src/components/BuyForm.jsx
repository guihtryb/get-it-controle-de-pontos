import PropTypes from 'prop-types';
import React from 'react';
import BuyButton from './BuyButton';
import ProductAttributes from './ProductAttributes';

export default function BuyForm({
  buyPaymentMethod,
  setBuyPaymentMethod,
  attributes,
  onSubmit,
  setAttributesForms,
  attributesForms,
}) {
  return (
    <form onSubmit={onSubmit} className="product-payment-form">
      {
            attributes && attributes.map(
              (attribute) => (
                <ProductAttributes
                  key={attribute.name}
                  data={attribute.data}
                  name={attribute.name}
                  onChange={(({ target }) => setAttributesForms({
                    ...attributesForms,
                    [attribute.name]: target.value,
                  }))}
                  values={attributesForms}
                />
              ),
            )
          }

      <h2>Método de pagamento:</h2>

      <select className="product-payment-method" onChange={(e) => setBuyPaymentMethod(e.target.value)}>
        <option value="money">Dinheiro</option>
        <option value="points">Pontos</option>
      </select>
      <BuyButton method={buyPaymentMethod} />
    </form>
  );
}

BuyForm.propTypes = {
  buyPaymentMethod: PropTypes.string.isRequired,
  setBuyPaymentMethod: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAttributesForms: PropTypes.func.isRequired,
  attributesForms: PropTypes.shape({
    cores: PropTypes.string,
  }).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};
