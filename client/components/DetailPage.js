import React from 'react';
import '../styles/DetailPage.scss';

const DetailPage = (props) => {
  return (
    <article class='details'>
      <img src='#' />
      <div dangerouslySetInnerHTML={{__html: '<h1>I am some markdown</h1>'}} />
    </article>
  );
};

DetailPage.propTypes = {
  children: React.PropTypes.node
};

export default DetailPage;
