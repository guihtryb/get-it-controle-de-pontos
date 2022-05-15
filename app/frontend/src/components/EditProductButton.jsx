import PropTypes from 'prop-types';
import React from 'react';
import '../styles/components/EditProductButton.css';
import editBtn from '../images/icons8-edit-33.png';

function EditProductButton({ index }) {
  return (
    <button
      data-testid={`edit-product-${index}`}
      className="edit-btn"
      type="button"
    >
      <img src={editBtn} alt="edit button" />
    </button>
  );
}

EditProductButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default EditProductButton;
