import React, { useContext } from 'react';
import Context from '../context/Context';
import { setDisplay } from '../utilis';
import CloseButton from './CloseButton';

import '../styles/components/DeleteProductModal.css';
import products from '../mocks/products';

function DeleteProductModal() {
  const {
    askedToDelete,
    setShowDeleteProductModal,
    showDeleteProductModal,
  } = useContext(Context);

  const handleDelete = () => {
    const productDeleted = products.filter((product) => product.id !== askedToDelete);

    products.splice(0, products.length);

    products.push(...productDeleted);

    setShowDeleteProductModal(false);
  };

  return (
    <section
      className="delete-product-modal-container"
      data-testid="delete-product-modal-container"
      style={{ display: setDisplay(showDeleteProductModal).container }}
    >
      <div
        data-testid="delete-product-modal"
        className="delete-product-modal"
        style={{ display: setDisplay(showDeleteProductModal).box }}
      >
        <CloseButton setShowModal={setShowDeleteProductModal} />
        <form>
          <h3> Você está certo disso? </h3>
          <div
            className="delete-options"
          >
            {' '}
            <button
              type="button"
              data-testid="delete-yes"
              className="delete-yes"
              onClick={handleDelete}
            >
              Sim
            </button>
            <button
              data-testid="delete-no"
              type="button"
              onClick={() => setShowDeleteProductModal(false)}
              className="delete-yes"
            >
              Não
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DeleteProductModal;
