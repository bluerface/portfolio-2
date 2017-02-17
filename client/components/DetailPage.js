import React from 'react';
import marked from '../configMarked';
import {bySlug} from '../data';
import '../styles/DetailPage.scss';

const DetailPage = (props) => {
  var project = bySlug[props.params.project_slug];
  var imgStyles = {
    backgroundImage: `url(images/${project.imageBanner})`,
    backgroundPosition: project.imageBannerPos || 'center top'
  };
  return (
    <article className='details'>
      <div className='img' style={imgStyles}>
        <img src={`images/${project.imageBanner}`} />
      </div>
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{__html: marked(project.longDescription)}} />
    </article>
  );
};

DetailPage.propTypes = {
  children: React.PropTypes.node
};

export default DetailPage;
