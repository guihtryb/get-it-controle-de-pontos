import React from 'react';
import '../styles/components/Username.css'
import { getUsername } from '../utilis';


const Username = () => {

  return (
    <span 
      data-testid="username-span"
      className="username-span"
    >
      {`Hi, ${ getUsername() }!`}
    </span>
  );
};

export default Username;
