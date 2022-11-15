import PropTypes from 'prop-types';
import React from 'react';

export default function DepositModal({
  depositMethod, depositValue, balanceValue, handleDepositDone,
}) {
  return (
    <div className="deposit-modal-container">
      <div className="deposit-modal">
        <h1>Depósito feito com successo!</h1>
        <ul>
          <li>
            Método de pagamento:
            <span>{depositMethod}</span>
          </li>
          <li>
            Valor depositado:
            <span>
              R$
              {' '}
              {depositValue}
            </span>
          </li>
          <li>
            Saldo atual:
            <span>
              R$
              {' '}
              {balanceValue}
            </span>
          </li>
        </ul>
        <button className="btn-conclude" type="button" onClick={() => handleDepositDone(false)}>Concluir</button>
      </div>
    </div>
  );
}

DepositModal.propTypes = {
  balanceValue: PropTypes.number.isRequired,
  depositMethod: PropTypes.string.isRequired,
  depositValue: PropTypes.string.isRequired,
  handleDepositDone: PropTypes.func.isRequired,
};
