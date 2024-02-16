import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../../../TheSister1TextBottomContainer';
import EerieButton from '../../../../../../components/EeerieButton';

function PlayWithDolls() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [, setCurrentPartIndex] = useState(0);

  const scene1 = 'All of the dolss were very happy, because nobody want to play with them';
  const scene2 = 'And one particular doll, mix feeling joy and sad';
  const scene3 = 'The hunter realized and catch the doll, saying "I found you"';
  const scene4 = 'The doll smile to him and melts away revealing a key';
  const scene5 = 'The hunter use the key to escape from the area, while the dolls saying goodybye to him, and thank to him because the hunter play with them';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5 ;

  const imageBackgrounds = [
    'doll_happy.jpg',
    'doll_cry_while_smile.jpg',
    'hunter_found.jpg',
    'doll_melt.jpg',
    'say_goodbye.jpg',
  ];

  const handleTextComplete = (currentPartIndex) => {
    setCurrentPartIndex(currentPartIndex);
    setShowChoices(true);
  };

  const handleClick = (e) => {
    navigate('/');
  }


  return (
    <>
      <div>
        <EerieButton className="Z-index-topLeft" onClick={handleClick} value="exit" text={'X'}/>
      </div>
      {showChoices ? navigate('/') : (
        <TheSister1TextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/>
      )}
    </>
  );
}

export default PlayWithDolls;