import React from 'react';
import BuyButton from './BuyButton';

export default function BuyForm() {
  // Estado do formulário
  // Informações de pontos e dinheiro do usuário
  // botão será alterado a partir do valor do select

  return (
    <form onSubmit={() => {}}>
      <select>
        <option>Pontos</option>
        <option>Dinheiro</option>
      </select>
      <BuyButton method userBalance userPoints />
    </form>
  );
}
