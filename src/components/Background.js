import React from 'react';

const Background = ({ backgroundImage, children }) => {
  const divBackgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  };

  return <div style={divBackgroundStyle}>{children}</div>;
};

export default Background;
