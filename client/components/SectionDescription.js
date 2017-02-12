import React from 'react';
import '../styles/SectionDescription.scss';

const SectionDescription = ({section, onClick}) => {
  return (
    <div className='description' onClick={onClick}>
      <h1> {section.title} </h1>
      <p> {section.description} </p>
    </div>
  );
};

SectionDescription.propTypes = {
  section: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default SectionDescription;
