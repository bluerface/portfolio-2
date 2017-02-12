import React from 'react';
import SectionDescription from './SectionDescription';
import ProjectCard from './ProjectCard';

const Section = ({section}) => {
  return (
    <div>
      <SectionDescription section={section} />
      {
        section.projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))
      }
    </div>
  );
};

Section.propTypes = {
  section: React.PropTypes.object.isRequired
};

export default Section;
