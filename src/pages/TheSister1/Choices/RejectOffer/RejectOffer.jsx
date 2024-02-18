import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../components/EeerieButton';

function RejectOffer() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The girl wanted to return to her home and the rich man offer to escort the girl safely';
  const scene2 = 'The man told her that he knows a shortcut to her home while showing a dark alley that that will lead through shortcut';
  const scene3 = 'While walking through the alley, the man kidnapped her and put her in his car';
  const scene4 = '..................................      ............................    ....................';
  const scene5 = 'The girl woke up with other children in a locked room';
  const scene6 = 'Rumors said that the plagues happened in the city were due to the children, who have been called the Children of the Witches';
  const scene7 = 'Because of that, the kidnapped children are sacrificed to the false Gods';
  const scene8 = 'Suddenly, a group of knights stormed the place, killing the heretics';
  const scene9 = 'While subjugating them, one of heretics throw a torch, resulting the place burned down';
  const scene10 = 'All of heretics are dead, and some of the knights made out alive. Leaving the children locked in the room';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5
                    + '\n' + scene6 + '\n' + scene7 + '\n' + scene8 + '\n' + scene9 + '\n' 
                    + scene10;

  const imageBackgrounds = [
    'wanted_to_return.jpg',
    'show_a_dark_alley.jpg',
    'kidnapped_her.jpg',
    'black_background.jpg',
    'woke_up.jpg',
    'rumors.jpg',
    'sacrificed.jpg',
    'knights_storm_in.jpg',
    'throw_torch.jpg',
    'fire_spread.jpg',
  ];

  const choiceText = [
    'Try to kick the door',
    'Jump out of the room',
  ]

  const valueChoice = [
    'kick_door',
    'jump_room',
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
    switch (valueChoices) {
      case 'kick_door':
        navigate('/the_sister_1/kick_door');
        break;
      case 'jump_room':
        navigate('/the_sister_1/jump_room');
        break;
      default:
        navigate('/');
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

export default RejectOffer;