import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/CloseButton.css';

function CloseButton({ setShowModal }) {
  return (
    <button
      type="button"
      data-testid="close"
      className="close"
      onClick={() => setShowModal(false)}
    >
      X
    </button>
  );
}

CloseButton.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default CloseButton;
