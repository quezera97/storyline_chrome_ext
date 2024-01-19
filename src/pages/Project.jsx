import Background from '../components/Background.js';
import BreakLine from '../components/BreakLine.js';
import TitleText from '../components/Text';
import '../App.css';


function Project() {

    return (
        <Background backgroundImage={require('../assets/img/project_background.jpg')}>
            <BreakLine quantity={1}/>
            <TitleText className="Red-text Eerie-text Subtitle-text" text="My Projects"/>
        
        </Background>
    );
}

export default Project;