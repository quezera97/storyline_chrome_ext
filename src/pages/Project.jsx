import Background from '../components/Background.js';
import Grid from '../components/Grid.js';
import TitleText from '../components/Text';
import CC from '../assets/img/CC.png';
import KWB from '../assets/img/KWB.png';
import MD from '../assets/img/MD.png';
import MS from '../assets/img/MS.png';

function Project() {

    const gridData = [
        { id: 1, text: 'Keyboard Warrior', imageUrl: KWB },
        { id: 2, text: 'Malaysia Slang', imageUrl: MS },
        { id: 3, text: 'Malaysia Dish', imageUrl: MD },
        { id: 4, text: 'Q-rency Converter', imageUrl: CC },
      ];
    

    return (
        <Background backgroundImage={require('../assets/img/project_background.jpg')}>
            <TitleText className="Red-text Eerie-text Normal-text" text="My Projects"/>
            <TitleText className="White-text Eerie-text Small-text" text="Please Support Me"/>
            <Grid data={gridData}/>
        </Background>
    );
}

export default Project;