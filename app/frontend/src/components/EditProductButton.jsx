import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import '../styles/components/EditProductButton.css';
import editBtn from '../images/icons8-edit-33.png';
import Context from '../context/Context';

function EditProductButton({ id }) {
  const { setShowEditProductModal, setAskedToEdit } = useContext(Context);

  const handleClick = () => {
    setShowEditProductModal(true);
    setAskedToEdit(id);
  };

  return (
    <button
      data-testid={`edit-product-${id}`}
      className="edit-btn"
      type="button"
      onClick={handleClick}
    >
      <img src={editBtn} alt="edit button" />
    </button>
  );
}

EditProductButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EditProductButton;
