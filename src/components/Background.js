import React from 'react';

const Background = ({ backgroundImage, children }) => {
  const containerStyle = {
    position: 'relative',
    display: 'flex',
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  return (
    <div style={containerStyle}>
      <img src={backgroundImage} alt="" style={imageStyle} />
      {children}
    </div>
  );
};


export default Background;
