import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.description} ({link.url}) by {link.postedBy.username}
      </div>
    </div>
  );
};

export default Link;