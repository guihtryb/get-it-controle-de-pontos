/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import CloseButton from './CloseButton';
import products from '../mocks/products';

import '../styles/components/RegisterProductModal.css';
import { setDisplay } from '../utilis';

function RegisterProductModal() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [pricePoints, setPricePoints] = useState(0);
  const [toPointConverter, setToPointConverter] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [failedRegistering, setFailedRegistering] = useState(false);

  const { setShowRegisterProductModal, showRegisterProductModal } = useContext(Context);

  const register = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      image,
      price,
      pricePoints,
      toPointConverter,
      sold: false,
    };

    try {
      // const endpoint = '/product'

      // await requestRegister(endpoint, { newProduct });
      products.push(newProduct);

      setIsRegistered(true);
    } catch (err) {
      setFailedRegistering(true);
    }
  };

  useEffect(() => {
    setFailedRegistering(false);
    setIsRegistered(false);
  }, [title, image, price, pricePoints, toPointConverter]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <section
      className="register-product-modal-container"
      data-testid="register-product-modal-container"
      style={{ display: setDisplay(showRegisterProductModal).container }}
    >
      <div
        data-testid="register-product-modal"
        className="register-product-modal"
        style={{ display: setDisplay(showRegisterProductModal).box }}
      >
        <CloseButton setShowModal={setShowRegisterProductModal} />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="register-title-input">
            Título:
            <input
              data-testid="register-product-title"
              id="register-title-input"
              type="text"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </label>
          <label htmlFor="register-product-image">
            image:
            <input
              data-testid="register-product-image"
              id="register-product-image"
              type="text"
              value={image}
              onChange={({ target: { value } }) => setImage(value)}
            />
          </label>
          <label htmlFor="register-product-price">
            Preço:
            <input
              data-testid="register-product-price"
              id="register-product-price"
              type="number"
              value={price}
              onChange={({ target: { value } }) => setPrice(value)}
            />
          </label>
          <label htmlFor="register-product-price-points">
            Preço em pontos:
            <input
              data-testid="register-product-price-points"
              id="register-product-price-points"
              type="number"
              value={pricePoints}
              onChange={({ target: { value } }) => setPricePoints(value)}
            />
          </label>
          <label htmlFor="register-product-converter">
            Fator de conversão de pontos por real:
            <input
              data-testid="register-product-converter"
              id="register-product-converter"
              type="number"
              value={toPointConverter}
              onChange={({ target: { value } }) => setToPointConverter(value)}
            />
          </label>
          {
            (failedRegistering)
              ? (
                <p
                  data-testid="register-error-message"
                  className="register-error-message"
                >
                  Erro no preenchimento dos campos!
                </p>
              ) : null
          }
          {
            (isRegistered)
              ? (
                <p
                  data-testid="register-success-message"
                  className="register-success-message"
                >
                  Produto cadastrado!
                </p>
              ) : null
          }
          <button
            data-testid="register-product-btn"
            type="submit"
            onClick={(e) => register(e)}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterProductModal;
