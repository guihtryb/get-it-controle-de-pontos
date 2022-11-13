import PropTypes from 'prop-types';
import React from 'react';
import AttributeButton from './AttributeButton';

export default function ProductAttributes({ name, data }) {
  return (
    <div key={name} className="attributes-container">
      <h2 className="attribute-name">{`${name} disponíveis`}</h2>
      <div className="attributes">
        {
        data && data.map(
          (item) => (
            <AttributeButton
              key={item}
              attributeName={name}
              item={item}
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
};
