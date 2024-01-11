import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../App.css';

import TitleText from '../components/Text';
import EerieButton from '../components/EeerieButton';
import Background from '../components/Background';
import BreakLine from '../components/BreakLine';

function IntroPage() {
    const navigate = useNavigate();

    const divOptionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    };

    const handleClick = (value) => {
        switch (value) {
            case 'start':
                // navigate('/start');
                break;
            case 'settings':
                navigate('/settings');
                break;
            case 'character':
                navigate('/character');
                break;
        
            default:
                navigate('/');
                break;
        }
    };

    return (
        <Background backgroundImage={require('../assets/img/intro-background.jpg')}>
            <TitleText className="White-text Eerie-text Title-text" text="~ The ~"/>
            <TitleText className="Red-text Eerie-text Title-text" text="Mannequinn"/>
            <BreakLine quantity={2}/>
            <div style={divOptionStyle}>
                <EerieButton onClick={handleClick} value="start" text={'Start'}/>
                <EerieButton onClick={handleClick} value="settings" text={'Settings'}/>
                <EerieButton onClick={handleClick} value="character" text={'Caharacter'}/>
            </div>
        </Background>
    );
}

export default IntroPage;
