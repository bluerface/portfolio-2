import React from 'react';
import SectionDescription from './SectionDescription';
import ProjectCard from './ProjectCard';
import '../styles/Section.scss';

class Section extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
    this.onClick = this.onClick.bind(this);
  }
  render () {
    var section = this.props.section;

    return (
      <section>
        <SectionDescription section={section} onClick={this.onClick} />
        <div style={{overflow: 'hidden'}} >
          <div className={this.state.open ? 'open' : 'hidden'}>
            {
              section.projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))
            }
          </div>
        </div>
      </section>
    );
  }
  onClick () {
    this.setState({open: !this.state.open});
  }
}

Section.propTypes = {
  section: React.PropTypes.object.isRequired
};

export default Section;
