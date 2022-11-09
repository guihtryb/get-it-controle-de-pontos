import React from 'react';
import Header from '../components/Header';
import '../styles/pages/Deposit.css';

export default function Deposit() {
  return (
    <>
      <Header page="userView" />
      <main className="deposit-main">
        <h1>Realizar Depósito</h1>
        <form onSubmit={() => {}} className="payment-form">
          <h2>Selecione um método de pagamento:</h2>
          <label htmlFor="credit">
            {' '}
            Cartão de Crédito
            <input type="radio" name="payment" id="credit" />
          </label>
          <label htmlFor="debit">
            {' '}
            Cartão de Débito
            <input type="radio" name="payment" id="debit" />
          </label>
          <label htmlFor="ticket">
            {' '}
            Boleto
            <input type="radio" name="payment" id="ticket" />
          </label>
        </form>
      </main>
    </>

  );
}
