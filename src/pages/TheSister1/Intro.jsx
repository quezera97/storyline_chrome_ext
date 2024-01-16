import React, { useState } from 'react';
import TheSister1TextBottomContainer from './TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from './TheSister1ChoiceContainerBottom';

function IntroTheSister1() {
  const [showChoices, setShowChoices] = useState(false);

  const scene1 = 'Once upon a time, there was a homeless and poor girl asking for food on the streets';
  const scene2 = 'Everytime she asks, all of them rejected her';
  const scene3 = 'But one day, she accidently bumped into a rich-looking person in a suit';
  const scene4 = 'She asks him a bread as she was very hungry';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4;

  const imageBackgrounds = [
    'ask_food.jpg',
    'looking_for_food.jpg',
    'ask_food.jpg',
    'looking_for_food.jpg',
    'ask_food.jpg', //scene 5 (option)
  ];

  const choiceText = [
    'Give food',
    'How Give food',
  ]
  const valueChoice = [
    'Give food',
    'How Give food',
  ]
  const hiddenChoice = [
    false,
    false,
    true,
  ]

  const handleChoiceSelect = (selectedValue) => {
    console.log(`User selected: ${selectedValue}`);
  };

  const handleTextComplete = () => {
    setShowChoices(true);
  };

  return (
    <>
      {showChoices ? (
        <TheSister1ChoiceContainerBottom image={imageBackgrounds} text={choiceText} value={valueChoice} hidden={hiddenChoice} onChoiceSelect={handleChoiceSelect}/>
      ) : (
        <TheSister1TextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/>
      )}
    </>
  );
}

export default IntroTheSister1;