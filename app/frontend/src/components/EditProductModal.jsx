import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import products from '../mocks/products';
import { setDisplay } from '../utilis';
import CloseButton from './CloseButton';

import '../styles/components/EditProductModal.css';

function EditProductModal() {
  const {
    askedToEdit,
    setShowEditProductModal,
    showEditProductModal,
  } = useContext(Context);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [pricePoints, setPricePoints] = useState(0);
  const [toPointConverter, setToPointConverter] = useState(0);
  const [isEdited, setIsEdited] = useState(false);
  const [failedEditing, setFailedEditing] = useState(false);

  const edit = async (e) => {
    e.preventDefault();

    try {
      // wip conexão com api-  const endpoint = '/product'

      // wip conexão com api - await requestProductUpdate(endpoint, { newProduct });
      const productDeleted = products.filter((product) => product.id !== askedToEdit);

      const productEdited = {
        id: askedToEdit,
        title,
        image,
        price: Number(price),
        pricePoints: Number(pricePoints),
        toPointConverter: Number(toPointConverter),
        sold: false,
      };

      productDeleted.push(productEdited);

      productDeleted.sort((a, b) => (a.id > b.id ? 1 : -1));

      products.splice(0, products.length);

      products.push(...productDeleted);

      setIsEdited(true);
    } catch (err) {
      setFailedEditing(true);
    }
  };

  useEffect(() => {
    setFailedEditing(false);
    setIsEdited(false);
  }, [title, image, price, pricePoints, toPointConverter]);

  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <section
      className="edit-product-modal-container"
      data-testid="edit-product-modal-container"
      style={{ display: setDisplay(showEditProductModal).container }}
    >
      <div
        data-testid="edit-product-modal"
        className="edit-product-modal"
        style={{ display: setDisplay(showEditProductModal).box }}
      >
        <CloseButton setShowModal={setShowEditProductModal} />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="edit-title-input">
            Título:
            <input
              data-testid="edit-product-title"
              id="edit-title-input"
              type="text"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </label>
          <label htmlFor="edit-product-image">
            image:
            <input
              data-testid="edit-product-image"
              id="edit-product-image"
              type="text"
              value={image}
              onChange={({ target: { value } }) => setImage(value)}
            />
          </label>
          <label htmlFor="edit-product-price">
            Preço:
            <input
              data-testid="edit-product-price"
              id="edit-product-price"
              type="number"
              value={price}
              onChange={({ target: { value } }) => setPrice(value)}
            />
          </label>
          <label htmlFor="edit-product-price-points">
            Preço em pontos:
            <input
              data-testid="edit-product-price-points"
              id="edit-product-price-points"
              type="number"
              value={pricePoints}
              onChange={({ target: { value } }) => setPricePoints(value)}
            />
          </label>
          <label htmlFor="edit-product-converter">
            Fator de conversão de pontos por real:
            <input
              data-testid="edit-product-converter"
              id="edit-product-converter"
              type="number"
              value={toPointConverter}
              onChange={({ target: { value } }) => setToPointConverter(value)}
            />
          </label>
          {
              (failedEditing)
                ? (
                  <p
                    data-testid="edit-error-message"
                    className="edit-error-message"
                  >
                    Erro no preenchimento dos campos!
                  </p>
                ) : null
            }
          {
              (isEdited)
                ? (
                  <p
                    data-testid="edit-success-message"
                    className="edit-success-message"
                  >
                    Produto editado!
                  </p>
                ) : null
            }
          <button
            data-testid="edit-product-btn"
            type="submit"
            onClick={(e) => edit(e)}
          >
            Editar
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProductModal;
