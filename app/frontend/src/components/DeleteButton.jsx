import PropTypes from 'prop-types';
import React from 'react';
import '../styles/components/DeleteProductButton.css';
import deleteBtn from '../images/icons8-remove-38.png';

function DeleteButton({ index }) {
  return (
    <button
      data-testid={`delete-product-${index}`}
      className="delete-btn"
      type="button"
    >
      <img src={deleteBtn} alt="delete button" />
    </button>
  );
}

DeleteButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DeleteButton;
