import React from 'react';
import {bySlug} from '../data';
import '../styles/DetailPage.scss';

const DetailPage = (props) => {
  console.log(bySlug);
  return (
    <article className='details'>
      <img src='#' />
      <div dangerouslySetInnerHTML={{__html: '<h1>I am some markdown</h1>'}} />
    </article>
  );
};

DetailPage.propTypes = {
  children: React.PropTypes.node
};

export default DetailPage;
