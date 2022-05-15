import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import '../styles/components/DeleteProductButton.css';
import deleteBtn from '../images/icons8-remove-38.png';
import Context from '../context/Context';

import '../styles/components/RegisterProductModal.css';

function DeleteButton({ id }) {
  const { setShowDeleteProductModal, setAskedToDelete } = useContext(Context);

  const handleClick = () => {
    setShowDeleteProductModal(true);
    setAskedToDelete(id);
  };

  return (
    <button
      data-testid={`delete-product-${id}`}
      className="delete-btn"
      type="button"
      onClick={handleClick}
    >
      <img src={deleteBtn} alt="delete button" />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
