import PropTypes from 'prop-types';
import React from 'react';

export default function Input({
  type, title, name, id, onChange, value, placeholder, checked,
}) {
  return (
    <label htmlFor={id}>
      { title }
      <input
        type={type}
        name={name}
        value={type === 'radio' ? title : value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        checked={checked}
      />
    </label>

  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  title: '',
  placeholder: '',
  checked: false,
};
