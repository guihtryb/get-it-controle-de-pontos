import React from 'react';
import DepositModal from '../components/DepositModal';
import Header from '../components/Header';
import Input from '../components/Input';
import Context from '../context/Context';
import '../styles/pages/Deposit.css';

export default function Deposit() {
  const [depositMethod, setDepositMethod] = React.useState('Cartão de Crédito');
  const [forms, setForms] = React.useState({
    depositValue: '',
    terms: false,
  });
  const [depositDone, setDepositDone] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const { userBalance, setUserBalance } = React.useContext(Context);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return target.type === 'radio' ? setDepositMethod(value) : setForms({ ...forms, [name]: value });
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

    if (formatedValue < 1) {
      setErrorMessage('Digite um valor maior que 0 para depósito!');
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

  const handleSubmit = (e, value) => {
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
        <form className="deposit-form" onSubmit={(e) => handleSubmit(e, forms.depositValue)}>

          <h2>Selecione um método de pagamento:</h2>
          <Input
            checked={depositMethod === 'Cartão de Crédito'}
            id="credit"
            name="deposit"
            onChange={handleChange}
            title="Cartão de Crédito"
            type="radio"
          />
          <Input
            checked={depositMethod === 'Pix'}
            id="pix"
            name="deposit"
            onChange={handleChange}
            title="Pix"
            type="radio"
          />
          <Input
            checked={depositMethod === 'Boleto'}
            id="ticket"
            name="deposit"
            onChange={handleChange}
            title="Boleto"
            type="radio"
          />

          <h2>Digite o valor para depósito:</h2>
          <Input
            id="deposit-value"
            name="depositValue"
            onChange={handleChange}
            placeholder="100,00"
            type="text"
            value={forms.depositValue}
          />
          <Input
            id="terms"
            name="terms"
            onChange={handleChange}
            title="Você está ciente de que os dados acima são fictícios?"
            type="checkbox"
            checked={forms.terms}
          />
          <button type="submit" className={`submit-btn ${!forms.terms ? 'disabled' : ''}`} disabled={!forms.terms}>
            Depositar
          </button>
          {
          errorMessage && (
          <p className="error-message">
            { errorMessage }
          </p>
          )
        }
        </form>
        {
          isLoading && (<p>Efetuando depósito...</p>)
        }
        {
          depositDone && (
          <DepositModal
            balanceValue={userBalance}
            depositMethod={depositMethod}
            depositValue={forms.depositValue}
            setDepositDone={setDepositDone}
          />
          )
        }
      </main>
    </>
  );
}
