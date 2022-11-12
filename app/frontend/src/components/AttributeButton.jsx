import PropTypes from 'prop-types';
import React from 'react';

export default function AttributeButton({ attributeName, item }) {
  return (
    attributeName === 'cores' ? (
      <button
        key={item}
        type="button"
        style={{ backgroundColor: item }}
      >
        {' '}
      </button>
    ) : (
      <button
        key={item}
        type="button"
      >
        {item}
      </button>
    ));
}

AttributeButton.propTypes = {
  attributeName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};
