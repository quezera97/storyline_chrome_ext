import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import Text from '../components/Text.js';
import Background from '../components/Background.js';
import EerieButton from '../components/EeerieButton.js';
import BreakLine from '../components/BreakLine.js';
import ConfirmationDialog from '../components/ConfirmationDialog.js';

function Settings() {
  const navigate = useNavigate();
  
  const [musicValue, setMusicValue] = useState(100);
  const [subtitle, setSubtitle] = useState('on');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onButtonColor = subtitle === 'on' ? 'rgb(230, 61, 61)' : '#111';
  const offButtonColor = subtitle === 'off' ? 'rgb(230, 61, 61)' : '#111';

  const handleChangeMusicValue = (e) => {
    setMusicValue(e.target.value);
  };

  const handleClickSubtitle = (e) => {
    const newSubtitle = subtitle === 'on' ? 'off' : 'on';
    setSubtitle(newSubtitle);
  }; 

  const handleSubmitSettings = (e) => {
    if (e === 'save') {
      setShowConfirmation(true);
    } else if (e === 'exit') {
      navigate('/');
    }
  };

  const handleConfirmDialog = (confirmed) => {
    if (confirmed) {
      navigate('/');
    }

    setShowConfirmation(false);
  };

  return (
    <>
      <Background backgroundImage={require('../assets/img/settings-background.jpg')}>

        <ConfirmationDialog
          isOpen={showConfirmation}
          message="Are you sure you want to save?"
          onConfirm={() => handleConfirmDialog(true)}
          onCancel={() => handleConfirmDialog(false)}
        />

        <Text className="White-text Eerie-text Title-text" text="Settings"/>
        <BreakLine quantity={1}/>
        <table className='Table-In-Settings'>
          <thead>
            <tr>
              <th scope="col"><Text className="White-text Eerie-text Normal-text" text="Music"/></th>
              <th scope="col"><Text className="White-text Eerie-text Normal-text" text="Subtitle"/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
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
              </th>
              <td>
                <EerieButton onClick={handleClickSubtitle} value="on" text={'ON'} color={onButtonColor} />
                <EerieButton onClick={handleClickSubtitle} value="off" text={'OFF'} color={offButtonColor} />
              </td>
            </tr>
            </tbody>
        </table>
        <BreakLine quantity={3}/>
        <div>
          <EerieButton onClick={handleSubmitSettings} value="save" text={'SAVE'}/>
          <EerieButton onClick={handleSubmitSettings} value="exit" text={'EXIT'}/>
        </div>
      </Background>
      <BreakLine quantity={1}/>
    </>
  );
}

export default Settings;