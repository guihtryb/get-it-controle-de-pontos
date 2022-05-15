import React from 'react';
import PropTypes from 'prop-types';

function GetItButton({ index, ableToGet }) {
  return (
    <button
      data-testid={`get-it-points-btn-${index}`}
      className={`get-it-points-btn able-to-get-${ableToGet}`}
      disabled={!ableToGet}
      type="button"
    >
      get it!
    </button>
  );
}

GetItButton.propTypes = {
  ableToGet: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default GetItButton;
