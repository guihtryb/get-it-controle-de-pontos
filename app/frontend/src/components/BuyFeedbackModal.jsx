import PropTypes from 'prop-types';
import React from 'react';

export default function BuyFeedbackModal({ message, handleClick }) {
  return (
    <>
      <h1>{message}</h1>
      <button type="button" onClick={handleClick}>click</button>
    </>
  );
}

BuyFeedbackModal.propTypes = {
  message: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
