import React from 'react';
import '../styles/SectionDescription.scss';

const SectionDescription = ({section}) => {
  return (
    <div className='description'>
      <h1> {section.title} </h1>
      <p> {section.description} </p>
    </div>
  );
};

SectionDescription.propTypes = {
  section: React.PropTypes.object
};

export default SectionDescription;
