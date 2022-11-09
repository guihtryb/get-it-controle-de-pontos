import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinkItem({ title, href }) {
  return (
    <li>
      <Link to={href}>
        {title}
      </Link>
    </li>
  );
}

NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
