import React from 'react';

const DetailPage = (props) => {
  return (
    <div>
      I am a Detail page for {props.params.project_slug}
    </div>
  );
};

DetailPage.propTypes = {
  children: React.PropTypes.node
};

export default DetailPage;
