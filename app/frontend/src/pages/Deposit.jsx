import React from 'react';
import DepositModal from '../components/DepositModal';
import Header from '../components/Header';
import Input from '../components/Input';
import Context from '../context/Context';
import '../styles/pages/Deposit.css';

const depositRadioInputs = [
  {
    id: 'credit',
    name: 'deposit',
    title: 'Cartão de crédito',
    type: 'radio',
  },
  {
    id: 'pix',
    name: 'deposit',
    title: 'Pix',
    type: 'radio',
  },
  {
    id: 'ticket',
    name: 'deposit',
    title: 'Boleto',
    type: 'radio',
  },
];

export default function Deposit() {
  const [depositMethod, setDepositMethod] = React.useState('Cartão de crédito');
  const [forms, setForms] = React.useState({
    depositValue: '',
    terms: false,
  });
  const [depositDone, setDepositDone] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const { userBalance, setUserBalance } = React.useContext(Context);

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
    setErrorMessage(null);
    return Number(formatedValue);
  };

  const depositValueOnUserAccount = (value) => {
    const validatedValue = validateDepositValueInput(value);

    if (validatedValue) {
      const sum = ((userBalance * 100) + (validatedValue * 100)) / 100;
      setUserBalance(sum);
    }
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return target.type === 'radio' ? setDepositMethod(value) : setForms({ ...forms, [name]: value });
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      depositValueOnUserAccount(value);
      setDepositDone(true);
      setForms({ ...forms, terms: false });
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

          <h2>Selecione um método de pagamento: </h2>
          {
            depositRadioInputs.map((input) => (
              <Input
                key={input.id}
                checked={depositMethod === input.title}
                id={input.id}
                name={input.name}
                onChange={handleChange}
                title={input.title}
                type={input.type}
              />
            ))
          }

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
