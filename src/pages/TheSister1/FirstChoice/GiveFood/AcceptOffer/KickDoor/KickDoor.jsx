import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../../../components/EeerieButton';

function KickDoor() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The door broke down';
  const scene2 = 'But the fire is too big, and burned them';

  const storyText = scene1 + '\n' + scene2;

  const imageBackgrounds = [
    'broke_down.jpg',
    'burned_them.jpg',
  ];

  const choiceText = [
    // 'Try to kick the door',
    // 'Jump out of the room',
  ]

  const valueChoice = [
    // 'kick',
    // 'jump',
  ]

  const hiddenChoice = [
    false,
    false,
    true,
  ]

  const handleChoiceSelect = (selectedValue) => {
    setValueChoices(selectedValue);
  };

  const handleTextComplete = (currentPartIndex) => {
    setCurrentPartIndex(currentPartIndex);
    setShowChoices(true);
  };

  const handleClick = (e) => {
    navigate('/');
  }

  const submitChoice = () => {
    if(valueChoices === 'kick'){
      navigate('/the_sister_1/kick_door');
    }
  }

  return (
    <>
      <div>
        <EerieButton className="Z-index-topLeft" onClick={handleClick} value="exit" text={'X'}/>
        {showChoices ? <EerieButton className="Button-choice" onClick={submitChoice} text={'Choose'}/> : null}
      </div>
      {showChoices ? (
        <TheSister1ChoiceContainerBottom image={imageBackgrounds} imageIndex={currentPartIndex} text={choiceText} value={valueChoice} hidden={hiddenChoice} onChoiceSelect={handleChoiceSelect}/>
      ) : (
        <TheSister1TextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/>
      )}
    </>
  );
}

export default KickDoor;