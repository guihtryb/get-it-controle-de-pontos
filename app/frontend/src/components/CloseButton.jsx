import React from 'react';

import '../styles/components/CloseButton.css'

const CloseButton = ({ setShowModal }) => {
  return (
  <button
    type='button'
    data-testid="close"
    className='close'
    onClick={() => setShowModal(false)}
  >
    X
  </button>
  );
};

export default CloseButton;
