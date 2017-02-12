import React from 'react';
import SectionDescription from './SectionDescription';

const Section = ({section}) => {
  return (
    <div>
      <SectionDescription section={section} />
    </div>
  );
};

Section.propTypes = {
  section: React.PropTypes.object
};

export default Section;
