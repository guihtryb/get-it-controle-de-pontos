import PropTypes from 'prop-types';
import React from 'react';
import AttributeInput from './AttributeInput';

export default function ProductAttributes({
  name, data, onChange, values,
}) {
  return (
    <div key={name} className="attributes-container">
      <h2 className="attribute-name">{`${name} disponíveis`}</h2>
      <div className="attributes">
        {
        data && data.map(
          (item) => (
            <AttributeInput
              key={item}
              attributeName={name}
              item={item}
              onChange={onChange}
              checked={values[name] === item}
            />
          ),
        )
      }
      </div>
    </div>
  );
}

ProductAttributes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired,
};
