import {useNavigate} from 'react-router-dom';
import EerieButton from '../../components/EeerieButton';
import Background from '../../components/Background';
import TitleText from '../../components/Text';
import BreakLine from '../../components/BreakLine';

function EndingForAll() {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        if(e ==='character'){
            navigate('/character');
        }
        else{
            navigate('/');
        }
    }

    const divOptionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    };

    return (
        <div>
            <div>
            <Background backgroundImage={require('../../assets/img/intro-background.jpg')}>
                <TitleText className="Red-text Eerie-text Title-text" text="Thank You"/>
                <TitleText className="Red-text Eerie-text Title-text" text="For Playing"/>
                <BreakLine quantity={2}/>
                <div style={divOptionStyle}>
                    <EerieButton onClick={handleClick} value="exit" text={'Exit'}/>
                    <EerieButton onClick={handleClick} value="character" text={'Character Select'}/>
                </div>
            </Background>
            </div>
        </div>
    );
}

export default EndingForAll;