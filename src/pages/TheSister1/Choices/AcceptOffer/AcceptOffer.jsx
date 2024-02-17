import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../components/EeerieButton';

function AcceptOffer() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The man show his big house around';
  const scene2 = 'Then, he invite her to eat with other poor children in the dining room';
  const scene3 = 'Suddenly all of the children fell asleep while eating';
  const scene4 = '..................................      ............................    ....................';
  const scene5 = 'The girl woke up with other children in a locked room';
  const scene6 = 'One by one, the children brought out from the room';
  const scene7 = 'Rumors said that the plagues happened in the city were due to the children, who have been called the Children of the Witches';
  const scene8 = 'Because of that, the children are sacrificed to the false Gods';
  const scene9 = 'Suddenly, a group of knights stormed the place, killing the heretics';
  const scene10 = 'While subjugating them, one of heretics throw a torch, resulting the place burned down';
  const scene11 = 'All of heretics are dead, and some of the knights made out alive. Leaving the children locked in the room';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5 
                    + '\n' + scene6 + '\n' + scene7 + '\n' + scene8 + '\n' + scene9 + '\n' 
                    + scene10 + '\n' + scene11;

  const imageBackgrounds = [
    'show_house.jpg',
    'invite_to_eat.jpg',
    'fell_asleep.jpg',
    'black_background.jpg',
    'woke_up.jpg',
    'brought_out.jpg',
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

export default AcceptOffer;