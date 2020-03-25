import React from 'react';


// import { Container } from './styles';

function Header(props) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

export default Header;
