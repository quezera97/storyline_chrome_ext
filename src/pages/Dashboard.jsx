import React from 'react';
import { useNavigate } from 'react-router-dom';

import TitleText from '../components/Text';
import EerieButton from '../components/EeerieButton';
import Background from '../components/Background';
import BreakLine from '../components/BreakLine';
import Header from '../components/Header';

function Dashboard() {
    const navigate = useNavigate();

    const urlFeedback = 'https://docs.google.com/forms/d/e/1FAIpQLSdizHVo2yp_zpEZM2EN1iRQPB3B6yanaTAPeTrk2vJkq95bqw/viewform?usp=sf_link';

    const divOptionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    };

    const handleClick = (value) => {
        switch (value) {
            case 'start':
                navigate('/intro');
                break;
            case 'settings':
                navigate('/settings');
                break;
            case 'urlFeedback':
                window.open(urlFeedback, '_blank');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <div>
            <Header/>
            <Background backgroundImage={require('../assets/img/intro-background.jpg')}>
                <TitleText className="White-text Eerie-text Title-text" text="~ The ~"/>
                <TitleText className="Red-text Eerie-text Title-text" text="Mannequinn"/>
                <BreakLine quantity={2}/>
                <div style={divOptionStyle}>
                    <EerieButton onClick={handleClick} value="start" text={'Start'}/>
                    <EerieButton onClick={handleClick} value="settings" text={'Settings'}/>
                    <EerieButton onClick={handleClick} value="urlFeedback" text={'Feedback'}/>
                </div>
            </Background>
        </div>
    );
}

export default Dashboard;
