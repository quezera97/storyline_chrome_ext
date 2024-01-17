import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import Background from '../../components/Background';
// import EerieButton from '../../components/EeerieButton';

const TheSister1TextBottomContainer = ({ text, onTextComplete, image }) => {
  // const navigate = useNavigate();
  const [storyParts, setStoryParts] = useState([]);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const blackContainerStyle = {
    position: 'absolute',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    width: '100%',
    height: '150px',
    cursor: 'pointer',
  };

  const handleContainerClick = () => {
    if (currentPartIndex < storyParts.length - 1) {
      // Increment currentPartIndex if there are more story parts
      setCurrentPartIndex(currentPartIndex + 1);
    } else {
      // Call the onTextComplete function when the text is complete
      onTextComplete(currentPartIndex);
    }
  };

  if (storyParts.length === 0) {
    setStoryParts(text.split('\n'));
  }

  
  return (
    <Background backgroundImage={require(`./img/${image[currentPartIndex]}`)}>
        {/* <EerieButton onClick={handleClick} value="exit" text={'Exit'}/> */}
        <div style={blackContainerStyle} onClick={handleContainerClick}>
          <p>{storyParts[currentPartIndex]}</p>
        </div>
    </Background>
  );
};

export default TheSister1TextBottomContainer;
