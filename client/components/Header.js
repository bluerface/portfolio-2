import React from 'react';
import {Link} from 'react-router';
import '../styles/Header.scss';

const Header = () => (
  <Link to='/' className='header-link'>
    <header>
      <h1>{'Zoe\'s Portfolio'}</h1>
      <p>Welcome to Zoes portfolio.</p>
      <p>This site is under development, appologies for the bare bones look.</p>
    </header>
  </Link>
);

export default Header;
