import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../../components/EeerieButton';

function KickDoor() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The door broke down';
  const scene2 = 'But the fire is too big, and burned them';
  const scene3 = 'Only ashes remains';
  const scene4 = 'Dazed and surrounded by flames, the hunter awake with the haunting visage of burning dolls';
  const scene5 = 'Sound echoed "Come and play with us"';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5;

  const imageBackgrounds = [
    'broke_down.jpg',
    'burned_them.jpg',
    'ashes_remains.jpg',
    'burning_dolls.jpg',
    'sound_echoes.jpg',
  ];

  const choiceText = [
    'Play with the dolls',
    'Run away from them',
  ]

  const valueChoice = [
    'play',
    'run',
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
    if(valueChoices === 'play'){
      navigate('/the_sister_1/play_with_dolls');
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