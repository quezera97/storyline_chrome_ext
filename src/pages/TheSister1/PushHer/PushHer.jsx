import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import EerieButton from '../../../components/EeerieButton';
import TheSister1ChoiceContainerBottom from '../TheSister1ChoiceContainerBottom';
import TheSister1TextBottomContainer from '../TheSister1TextBottomContainer';

function PushHer() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The girl instantenously fell down to the bumpy rocked road';
  const scene2 = 'Blood flow from her head';
  const scene3 = 'All the passerby go and check her condition';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3;

  const imageBackgrounds = [
    'fall_down.jpg',
    'blood_flow.jpg',
    'check.jpg',
  ];

  const choiceText = [
    'Check Her Condition',
    'Fled the scene',
  ]

  const valueChoice = [
    'check',
    'fled',
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
    if(valueChoices === 'check'){
      navigate('/the_sister_1/accept_offer');
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

export default PushHer;