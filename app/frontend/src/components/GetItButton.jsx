import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GetItButton({ index, ableToGet, productId }) {
  return (
    <Link to={`/user/product/${productId}`} className="get-it-link">
      <button
        data-testid={`get-it-points-btn-${index}`}
        className={`get-it-points-btn able-to-get-${ableToGet}`}
        disabled={!ableToGet}
        type="button"
      >
        get it!
      </button>
    </Link>
  );
}

GetItButton.propTypes = {
  ableToGet: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
};

export default GetItButton;
