import React from 'react';
import DepositModal from '../components/DepositModal';
import Header from '../components/Header';
import Input from '../components/Input';
import Context from '../context/Context';
import '../styles/pages/Deposit.css';

export default function Deposit() {
  const [depositMethod, setDepositMethod] = React.useState('Cartão de Crédito');
  const [depositValue, setDepositValue] = React.useState('');
  const [depositDone, setDepositDone] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const { userBalance, setUserBalance } = React.useContext(Context);

  const handleChange = ({ target }) => {
    const { value } = target;
    return target.type === 'radio' ? setDepositMethod(value) : setDepositValue(value);
  };

  const validateDepositValueInput = (value) => {
    const numberRegEx = /[.]?[0-9]/;
    let formatedValue = value;

    if (!value) {
      setErrorMessage('Por favor digite um valor para depósito!');
      throw Error();
    }

    if (formatedValue.includes(',')) {
      formatedValue = formatedValue.replace(',', '.');
    }

    if (!numberRegEx.test(formatedValue)) {
      setErrorMessage('Por favor insira um número válido (Apenas valores de 0-9 e "." são aceitos)');
      throw Error();
    }

    formatedValue = Number(formatedValue);

    if (!formatedValue) {
      setErrorMessage('Digite um valor maior que 0 para depósto');
      throw Error();
    }
    setErrorMessage('');
    return Number(formatedValue);
  };

  const depositValueOnUserAccount = (value) => {
    const validatedValue = validateDepositValueInput(value);

    if (validatedValue) {
      const sum = ((userBalance * 100) + (validatedValue * 100)) / 100;
      setUserBalance(sum);
    }
  };

  const handleClick = (e, value) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      depositValueOnUserAccount(value);
      setDepositDone(true);
    } catch (error) {
      setDepositDone(false);
    } finally {
      setIsLoading(false);
    }
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

          <button type="submit" onClick={(e) => handleClick(e, depositValue)} className="submit-btn">
            Depositar
          </button>
        </form>
        {
          errorMessage && (
          <p className="error-message">
            { errorMessage }
          </p>
          )
        }
        {
          isLoading && (<p>Efetuando depósito...</p>)
        }
        {
          depositDone && (
          <DepositModal
            balanceValue={userBalance}
            depositMethod={depositMethod}
            depositValue={depositValue}
            setDepositDone={setDepositDone}
          />
          )
        }
      </main>
    </>
  );
}
