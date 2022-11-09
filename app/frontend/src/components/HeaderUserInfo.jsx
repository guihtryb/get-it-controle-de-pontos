import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/HeaderUserInfo.css';

function HeaderUserInfo({ title, info }) {
  return (
    <div
      className="header-user-info-container"
    >
      <p>{title}</p>
      <p className="header-user-info">{info}</p>
    </div>
  );
}

HeaderUserInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default HeaderUserInfo;
