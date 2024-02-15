import Background from '../components/Background.js';
import Grid from '../components/Grid.js';
import TitleText from '../components/Text';
import Header from '../components/Header';
import CC from '../assets/img/CC.png';
import KWB from '../assets/img/KWB.png';
import MD from '../assets/img/MD.png';
import MS from '../assets/img/MS.png';
import BreakLine from '../components/BreakLine.js';

function Project() {

    const gridData = [
        { id: 1, text: 'Keyboard Warrior', imageUrl: KWB },
        { id: 2, text: 'Malaysia Slang', imageUrl: MS },
        { id: 3, text: 'Malaysia Dish', imageUrl: MD },
        { id: 4, text: 'Q-rency Converter', imageUrl: CC },
      ];
    

    return (
        <>
            <Header/>
            <Background backgroundImage={require('../assets/img/project_background.jpg')}>
                <TitleText className="White-text Eerie-text Subtitle-text" text="Please Support Me"/>
                <Grid data={gridData}/>
                <BreakLine quantity={1}/>
            </Background>
        </>
    );
}

export default Project;