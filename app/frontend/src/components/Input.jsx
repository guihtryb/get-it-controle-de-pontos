import PropTypes from 'prop-types';
import React from 'react';

export default function Input({
  type, title, name, id, onChange, value, placeholder,
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
      />
    </label>

  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  title: '',
  placeholder: '',
};
