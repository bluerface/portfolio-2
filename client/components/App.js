import React from 'react';

const App = (props) => {
  return (
    <div>
      I am a header
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
