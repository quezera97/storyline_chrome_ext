import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from './TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from './TheSister1ChoiceContainerBottom';
import EerieButton from '../../components/EeerieButton';

function IntroTheSister1() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'Once upon a time, there was a homeless and poor girl asking for food on the streets';
  const scene2 = 'Everytime she asks, all of them refuse to give her anything';
  const scene3 = 'But one day, she accidently bumped into a rich-looking person in a suit & asks him a bread as she was very hungry';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3;

  const imageBackgrounds = [
    'ask_food.jpg',
    'people_refuse.jpg',
    'bump_person.jpg',
  ];

  const choiceText = [
    'Give a piece of bread',
    'Push her away',
  ]

  const valueChoice = [
    'person_give_food',
    'person_push',
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

  const exitToDashboard = (e) => {
    navigate('/');
  }

  
  const submitChoice = () => {
    switch (valueChoices) {
      case 'person_give_food':
        navigate('/the_sister_1/give_food');
        break;
      case 'person_push':
        navigate('/the_sister_1/push_her');
        break;
      default:
        navigate('/');
    }
  };
  

  return (
    <>
      <EerieButton className="Z-index-topLeft" onClick={exitToDashboard} value="exit" text={'X'}/>
      {showChoices ? <EerieButton className="Button-choice" onClick={submitChoice} text={'Choose'}/> : null}
      {showChoices ? (
        <TheSister1ChoiceContainerBottom image={imageBackgrounds} imageIndex={currentPartIndex} 
          text={choiceText} value={valueChoice} hidden={hiddenChoice} onChoiceSelect={handleChoiceSelect}/>
        ) : (
          <TheSister1TextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/>
          )}
    </>
  );
}

export default IntroTheSister1;