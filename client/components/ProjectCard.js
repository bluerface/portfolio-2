import React from 'react';
import {Link} from 'react-router';
import '../styles/ProjectCard.scss';

const ProjectCard = ({project}) => (
  <div className='card'>
    <img src={project.imageSmall} />
    <Link to={project.slug}>
      <h1> {project.title} </h1>
    </Link>
    <p> {project.description} </p>
  </div>
);

ProjectCard.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default ProjectCard;
