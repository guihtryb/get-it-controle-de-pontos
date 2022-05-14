import React from 'react'
import '../styles/components/RegisterProductButton.css'

const RegisterProductButton = () => {
  return (
    <button
      data-testid="new-product-btn"
      className="new-product-btn"
    >
      Cadastrar produto
    </button>
  )
}

export default RegisterProductButton