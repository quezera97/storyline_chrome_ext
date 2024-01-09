import React from 'react';
import '../App.css';
import backgroundImage from '../assets/img/intro.jpg';
import TitleText from '../components/TitleText';
import EerieButton from '../components/EeerieButton';

function IntroPage() {
    const divIntroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const divOptionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const handleClick = (value) => {
        console.log(value);
    };

    return (
        <div style={divIntroStyle}>
            <TitleText className="White-text Eerie-text Title-text" text="~ The ~"/>
            <TitleText className="Red-text Eerie-text Title-text" text="Mannequinn"/>
            
            <div style={divOptionStyle}>
                <EerieButton onClick={handleClick} value="start" text={'Start'}/>
                <EerieButton onClick={handleClick} value="option" text={'Option'}/>
            </div>
        </div>
    );
}

export default IntroPage;
