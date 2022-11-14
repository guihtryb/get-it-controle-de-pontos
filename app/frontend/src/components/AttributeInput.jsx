import PropTypes from 'prop-types';
import React from 'react';

export default function AttributeInput({
  attributeName, item, onChange, checked,
}) {
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
          value={item}
          onChange={onChange}
          checked={checked}
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
          onChange={onChange}
          value={item}
          checked={checked}
        />
        <span>{item}</span>
      </label>
    ));
}

AttributeInput.propTypes = {
  attributeName: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
