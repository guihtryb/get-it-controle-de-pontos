import PropTypes from 'prop-types';
import React from 'react';
import CloseButton from './CloseButton';

export default function BuyFeedbackModal({
  message, handleClick, btnText, setShowModal,
}) {
  return (
    <div className="buy-feedback-modal-container">
      <div className="buy-feedback-modal">
        <CloseButton setShowModal={setShowModal} />
        <h1 className="buy-feedback-message">{message}</h1>
        <button className="btn-conclude" type="button" onClick={handleClick}>{btnText}</button>
      </div>
    </div>
  );
}

BuyFeedbackModal.propTypes = {
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
