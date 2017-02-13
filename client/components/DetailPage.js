import React from 'react';
import marked from 'marked';
import {bySlug} from '../data';
import '../styles/DetailPage.scss';

const DetailPage = (props) => {
  var project = bySlug[props.params.project_slug];
  return (
    <article className='details'>
      <img src={project.imageBanner} />
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{__html: marked(project.longDescription, {sanitise: true})}} />
    </article>
  );
};

DetailPage.propTypes = {
  children: React.PropTypes.node
};

export default DetailPage;
