import React from 'react';
import data from '../data';
import Section from './Section';

const MainPage = (props) => {
  return (
    <div>
      {
        data.map((section) => (
          <Section section={section} />
        ))
      }
    </div>
  );
};

export default MainPage;
