import React, { useState } from 'react';
import TheSister1TextBottomContainer from './TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from './TheSister1ChoiceContainerBottom';

function IntroTheSister1() {
  const [showChoices, setShowChoices] = useState(false);

  const page1 = 'Once upon a time';
  const page2 = 'In a land far, far away';
  const page3 = 'There lived a brave adventurer';

  const storyText = page1 + '\n' + page2 + '\n' + page3;

  const imageBackgrounds = [
    'ask_food.jpg',
    'looking_for_food.jpg',
  ];

  const handleTextComplete = () => {
    setShowChoices(true);
  };

  return (
    <>
      {showChoices ? (
        <TheSister1ChoiceContainerBottom image={imageBackgrounds}/>
      ) : (
        <TheSister1TextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/>
      )}
    </>
  );
}

export default IntroTheSister1;