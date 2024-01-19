import Background from '../components/Background.js';
import BreakLine from '../components/BreakLine.js';
import TitleText from '../components/Text';
import InputText from '../components/InputText.js';
import '../App.css';
import EerieButton from '../components/EeerieButton.js';


function ContactMe() {

    return (
        <Background backgroundImage={require('../assets/img/contact_me_background.jpg')}>
            <BreakLine quantity={1}/>
            <TitleText className="White-text Eerie-text Subtitle-text" text="Contact Me"/>
            <BreakLine quantity={1}/>
            <InputText
                type="input"
                placeholder={'Enter Name'}
                width={'45vw'}
                maxlength={'20'}
            />
            <BreakLine quantity={1}/>
            <InputText
                type="input"
                placeholder={'Enter Email'}
                width={'45vw'}
                maxlength={'20'}
            />
            <BreakLine quantity={1}/>
            <InputText
                type="textarea"
                placeholder={'Enter Message'}
                height={'20vh'}
                width={'45vw'}
                maxlength={'250'}
            />
            <BreakLine quantity={1}/>
            <EerieButton text={'Submit'}/>
        </Background>
    );
}

export default ContactMe;