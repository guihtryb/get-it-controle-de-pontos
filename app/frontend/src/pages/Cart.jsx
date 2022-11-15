import React from 'react';
import Header from '../components/Header';
import Context from '../context/Context';

export default function Cart() {
  const { cart } = React.useContext(Context);
  console.log(cart);
  return (
    <>
      <Header page="userView" />
      <h1>Carrinho</h1>
      <ul>
        {
        cart.map((item) => (
          <>
            <li key={item.id}>
              <img src={item.image} alt={item.tile} />
            </li>
            <li>
              {item.title}
            </li>
            <li>
              {item.date}
            </li>
          </>
        ))
        }
      </ul>
    </>
  );
}
