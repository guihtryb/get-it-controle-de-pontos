import React from 'react';

import '../styles/components/Header.css';

function Header(props) {
  const components = Object.keys(props);

  return (
    <header data-testid="get-it-header">
      {
        // eslint-disable-next-line react/destructuring-assignment
        components.map((component) => props[component])
      }
    </header>
  );
}

export default Header;
