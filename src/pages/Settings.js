import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import Text from '../components/Text.js';
import Background from '../components/Background.js';
import EerieButton from '../components/EeerieButton.js';
import BreakLine from '../components/BreakLine.js';

function Settings() {
  const navigate = useNavigate();
  
  const [musicValue, setMusicValue] = useState(100);
  const [subtitle, setSubtitle] = useState('on');

  const onButtonColor = subtitle === 'on' ? 'rgb(230, 61, 61)' : '#111';
  const offButtonColor = subtitle === 'off' ? 'rgb(230, 61, 61)' : '#111';

  const handleChangeMusicValue = (e) => {
    setMusicValue(e.target.value);
  };

  const handleClickSubtitle = (e) => {
    const newSubtitle = subtitle === 'on' ? 'off' : 'on';
    setSubtitle(newSubtitle);
  }; 

  const handleSubmit = (e) => {
    if(e === 'exit'){
      navigate('/');
    }
  }; 

  return (
    <Background backgroundImage={require('../assets/img/intro2.jpg')}>
      <Text className="White-text Eerie-text Title-text" text="Settings"/>
      <Text className="White-text Eerie-text Normal-text" text="Music volume"/>
      <Text className="Red-text Eerie-text Subtitle-text" text={musicValue}/>
      <input
        type="range"
        min="0"
        max="100"
        value={musicValue}
        onChange={handleChangeMusicValue}
        className="Eerie-range"
        id="eerie-range"
      />
      <BreakLine quantity={2}/>
      <Text className="White-text Eerie-text Normal-text" text="Subtitle"/>
      <div>
        <EerieButton onClick={handleClickSubtitle} value="on" text={'ON'} color={onButtonColor} />
        <EerieButton onClick={handleClickSubtitle} value="off" text={'OFF'} color={offButtonColor} />
      </div>
      <BreakLine quantity={5}/>
      <div>
        <EerieButton onClick={handleSubmit} value="save" text={'SAVE'}/>
        <EerieButton onClick={handleSubmit} value="exit" text={'EXIT'}/>
      </div>
    </Background>
  );
}

export default Settings;