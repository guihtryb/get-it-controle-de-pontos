import React from 'react';
import AttributeInput from '../components/AttributeInput';
import Header from '../components/Header';
import Context from '../context/Context';
import '../styles/pages/Cart.css';

export default function Cart() {
  const { cart } = React.useContext(Context);
  return (
    <>
      <Header page="userView" />
      <main className="cart-main">
        <h1>Carrinho</h1>
        <div className="cart-list-container">
          <ul>
            {
        cart.map((item) => (
          <div className="cart-item-card">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-infos">
              <ul className="infos-list">
                <li>
                  <span>
                    {item.title}
                  </span>
                </li>
                <li>
                  <span>
                    {item.date}
                  </span>
                </li>
                <li>
                  <span>
                    {item.buyPaymentMethod === 'points' ? `Valor: ${item.pricePoints} pts` : `Valor: R$ ${item.price}`}
                  </span>
                </li>
              </ul>
              <div>
                { item.attributes.map(
                  (attribute) => (
                    <div className="cart-attributes attributes">
                      { attribute.data.map((value) => (
                        <AttributeInput
                          attributeName={attribute.name}
                          item={value}
                          key={value}
                          checked={item.attributesForms[attribute.name] === value}
                          onChange={() => {}}
                        />
                      ))}
                    </div>
                  ),
                )}

              </div>
            </div>
          </div>
        ))
        }
          </ul>
        </div>
      </main>
    </>
  );
}
