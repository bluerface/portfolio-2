import React from 'react';
import {Link} from 'react-router';
import '../styles/Header.scss';

const Header = () => (
  <Link to='/' className='block-link'>
    <header>
      <h1>{'Zoe\'s Portfolio'}</h1>
      <p className='blurb'>
        A Junior Web Developer with strong skills in JavaScript and experience
       with front and back end technologies. Currently pursuing a job in a
       varied and creative environment, with an interest in design, UX and
       technology as a force for social good.
      </p>
    </header>
  </Link>
);

export default Header;
