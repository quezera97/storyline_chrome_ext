import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TheSister1TextBottomContainer from '../../TheSister1TextBottomContainer';
import TheSister1ChoiceContainerBottom from '../../TheSister1ChoiceContainerBottom';
import EerieButton from '../../../../components/EeerieButton';

function JumpRoom() {
  const navigate = useNavigate();
  const [showChoices, setShowChoices] = useState(false);
  const [valueChoices, setValueChoices] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  const scene1 = 'The caretakers had an idea to throw something out of the room to cushion while jumping';
  const scene2 = 'One by one jumping out of the window';
  const scene3 = 'Some of them are did not survive the fall, some of them did';
  const scene4 = 'When its time of the little girl to jump, she survived the fall';
  const scene5 = 'But, at that time, a few heretics found them and throw the torch to them';
  const scene6 = 'All of them screaming for help, running around helplessly to rid of the fire';
  const scene7 = 'But did not make it. All of them including the little girl turn into a burnt corpse';
  const scene8 = 'Dazed and surrounded by flames, the hunter awake with the haunting visage of burning dolls';
  const scene9 = 'Sound echoed "Come and play with us"';

  const storyText = scene1 + '\n' + scene2 + '\n' + scene3 + '\n' + scene4 + '\n' + scene5 + '\n' + scene6 + '\n' + scene7 + '\n' + scene8 + '\n' + scene9;

  const imageBackgrounds = [
    'throw_out_of_room.jpg',
    'jump_window.jpg',
    'some_survive_some_not.jpg',
    'girl_survive.jpg',
    'heretics_throw_torch_to_them.jpg',
    'screaming_for_help.jpg',
    'girl_burnt.jpg',
    'burning_dolls.jpg',
    'sound_echoes.jpg',
  ];

  const choiceText = [
    'Play with the dolls',
    'Run away from them',
  ]

  const valueChoice = [
    'play_with_dolls',
    'run_away_from_dolls',
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
      case 'play_with_dolls':
        navigate('/the_sister_1/play_with_dolls');
        break;
      case 'run_away_from_dolls':
        navigate('/the_sister_1/run_away_from_dolls');
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

export default JumpRoom;