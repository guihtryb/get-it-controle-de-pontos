import React from 'react';
import DepositModal from '../components/DepositModal';
import Header from '../components/Header';
import Input from '../components/Input';
import '../styles/pages/Deposit.css';

export default function Deposit() {
  const [depositMethod, setDepositMethod] = React.useState('Cartão de Crédito');
  const [depositValue, setDepositValue] = React.useState('0');
  const [depositDone] = React.useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    return target.type === 'radio' ? setDepositMethod(value) : setDepositValue(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header page="userView" />
      <main className="deposit-main">
        <h1>Realizar Depósito</h1>
        <form className="deposit-form">

          <h2>Selecione um método de pagamento:</h2>
          <Input
            type="radio"
            title="Cartão de Crédito"
            id="credit"
            name="deposit"
            onChange={handleChange}
          />
          <Input
            type="radio"
            title="Pix"
            id="pix"
            name="deposit"
            onChange={handleChange}
          />
          <Input
            type="radio"
            title="Boleto"
            id="ticket"
            name="deposit"
            onChange={handleChange}
          />

          <h2>Digite o valor para depósito:</h2>
          <Input
            type="text"
            id="deposit-value"
            name="deposit-value"
            onChange={handleChange}
            value={depositValue}
            placeholder="100,00"
          />

          <button type="submit" onClick={handleClick} className="submit-btn">
            Depositar
          </button>
        </form>
        {
          depositDone && (
          <DepositModal
            balanceValue={0}
            depositMethod={depositMethod}
            depositValue={depositValue}
          />
          )
        }
      </main>
    </>
  );
}
