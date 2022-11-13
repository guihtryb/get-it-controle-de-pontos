import PropTypes from 'prop-types';
import React from 'react';

export default function AttributeButton({ attributeName, item }) {
  return (
    attributeName === 'cores' ? (
      <label
        htmlFor={`color-${item}`}
        className="color-input-label"
        style={{ backgroundColor: item }}
      >
        <input
          className="color-input"
          id={`color-${item}`}
          key={item}
          name="color"
          type="radio"
        />
        <span />
      </label>

    ) : (
      <label
        htmlFor={`item-${item}`}
        className="attribute-input-label"
      >
        <input
          className="attribute-input"
          id={`item-${item}`}
          key={item}
          name={attributeName}
          type="radio"
        />
        <span>{item}</span>
      </label>
    ));
}

AttributeButton.propTypes = {
  attributeName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};
