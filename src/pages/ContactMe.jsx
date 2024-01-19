import Background from '../components/Background.js';
import BreakLine from '../components/BreakLine.js';
import TitleText from '../components/Text';
import InputText from '../components/InputText.js';
import EerieButton from '../components/EeerieButton.js';
import AlertDialog from '../components/AlertDialog.js';
import { useState } from 'react';


function ContactMe() {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = () => {
        const submittedName = document.getElementById('nameInput').value;
        const submittedEmail = document.getElementById('emailInput').value;
        const submittedMessage = document.getElementById('messageInput').value;
    
        if (submittedName === '' || submittedEmail === '' || submittedMessage === '') {
            setAlertMessage('Please fill out all fields');
            setIsAlertOpen(true);
            return;
        }
    
        if (!checkEmailStructure(submittedEmail)) {
            setAlertMessage('Please Enter a Valid Email Address');
            setIsAlertOpen(true);
            return;
        }
    
        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(`Name: ${submittedName}%0AEmail: ${submittedEmail}%0AMessage: ${submittedMessage}`);
        const mailtoLink = `mailto:help.quezera@gmail.com?subject=${subject}&body=${body}`;
    
        window.location.href = mailtoLink;
    };

    function checkEmailStructure(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    }

    const handleAlertCancel = () => {
        setIsAlertOpen(false);
    };

    return (
        <Background backgroundImage={require('../assets/img/contact_me_background.jpg')}>
            {isAlertOpen && (
                <AlertDialog isOpen={true} message={alertMessage} onCancel={handleAlertCancel} />
            )}
            <BreakLine quantity={1}/>
            <TitleText className="White-text Eerie-text Subtitle-text" text="Contact Me"/>
            <BreakLine quantity={1}/>
            <InputText
                id="nameInput"
                type="input"
                placeholder={'Enter Name'}
                width={'45vw'}
                maxlength={'20'}
            />
            <BreakLine quantity={1}/>
            <InputText
                id="emailInput"
                type="input"
                placeholder={'Enter Email'}
                width={'45vw'}
                maxlength={'20'}
            />
            <BreakLine quantity={1}/>
            <InputText
                id="messageInput"
                type="textarea"
                placeholder={'Enter Message'}
                height={'20vh'}
                width={'45vw'}
                maxlength={'250'}
            />
            <BreakLine quantity={1}/>
            <EerieButton onClick={handleSubmit} text={'Submit'}/>
        </Background>
    );
}

export default ContactMe;