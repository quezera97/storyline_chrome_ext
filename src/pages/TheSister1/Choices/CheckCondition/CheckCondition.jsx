import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../components/EeerieButton';

function CheckCondition() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The man pick her up, and rushed to the nearest hospital for treatment';
  const scene2 = 'He felt guilty and stay with her till she can discharge';
  const scene3 = 'The next day, the girl woke up and search for her sister';
  const scene4 = 'The man who stayed beside her all day calmed her and said sorry';
  const scene5 = 'He then ask for her family while giving her foods';
  const scene6 = 'She tells him that her parent are dead due to loan sharks';
  const scene7 = 'She lives with her sister near the sewage tunnel area where other homeless people are';
  const scene8 = 'The man felt pity and decided to adopt them while giving a hint of smile';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5 + '\n' + scene6 + '\n' + scene7 + '\n' + scene8;

  const imageBackgrounds = [
    'pick_her_up.jpg',
    'stay_with_her.jpg',
    'woke_up.jpg',
    'said_sorry.jpg',
    'ask_for_her_family.jpg',
    'parent_dead.jpg',
    'live_near_sewage_tunnel.jpg',
    'decides_to_adopt.jpg',
  ];

  const choiceText = [
    'Accept the offer',
    'Reject the offer',
  ]

  const valueChoice = [
    'accept',
    'reject',
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
    if(valueChoices === 'accept'){
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

export default CheckCondition;