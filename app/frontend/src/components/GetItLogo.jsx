import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/GetItLogo.css';

function GetItLogo() {
  return (
    <Link to="/user/products" className="get-it-logo">
      <span data-testid="get-it-logo">
        get it!
      </span>
    </Link>
  );
}

export default GetItLogo;
