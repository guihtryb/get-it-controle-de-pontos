import PropTypes from 'prop-types';
import React from 'react';

export default function DepositModal({ depositMethod, depositValue, balanceValue }) {
  return (
    <div className="deposit-modal">
      <h1>Depósito feito com successo!</h1>
      <ul>
        <li>
          Método de pagamento:
          {' '}
          <span>{depositMethod}</span>
        </li>
        <li>
          Valor depositado:
          {' '}
          <span>{depositValue}</span>
        </li>
        <li>
          Saldo atual:
          {' '}
          <span>{balanceValue}</span>
        </li>
      </ul>
    </div>
  );
}

DepositModal.propTypes = {
  balanceValue: PropTypes.number.isRequired,
  depositMethod: PropTypes.string.isRequired,
  depositValue: PropTypes.number.isRequired,
};
