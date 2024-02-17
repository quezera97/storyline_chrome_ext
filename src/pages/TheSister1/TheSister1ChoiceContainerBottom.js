import { useState } from 'react';
import Background from '../../components/Background.js';
import {RadioGroup, RadioButton} from '../../components/RadioButton.js'

const TheSister1ChoiceContainerBottom = ({ image, imageIndex, text, value, hidden, onChoiceSelect }) => {
    const [imagePath, setImagePath] = useState(image[imageIndex]);

    const handleChoiceSelect = (selectedValue) => {
        onChoiceSelect(selectedValue);
        
        switch (selectedValue) {
            case 'person_give_food':
                setImagePath('person_give_food.jpg');
                break;
            case 'person_push':
                setImagePath('person_push.jpg');
                break;
            case 'check_condition':
                setImagePath('check_condition.jpg');
                break;
            case 'fled_scene':
                setImagePath('fled_scene.jpg');
                break;
            case 'accept_offer_at_street':
                setImagePath('accept_offer_at_street.jpg');
                break;
            case 'reject_offer_at_street':
                setImagePath('reject_offer_at_street.jpg');
                break;
            case 'accept_offer_at_hospital':
                setImagePath('accept_offer_at_hospital.jpg');
                break;
            case 'reject_offer_at_hospital':
                setImagePath('reject_offer_at_hospital.jpg');
                break;
            case 'kick_door':
                setImagePath('kick_door.jpg');
                break;
            case 'jump_room':
                setImagePath('jump_room.jpg');
                break;
            case 'play_with_dolls':
                setImagePath('play_with_dolls.jpg');
                break;
            case 'run_away_from_dolls':
                setImagePath('run_away_from_dolls.jpg');
                break;
            default:
                setImagePath('black_background.jpg');
                break
        }
    };

    const blackContainerStyle = {
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        height: '150px',
        cursor: 'pointer',
    };

    return (
        <Background backgroundImage={require(`./img/${imagePath}`)}>
            <div style={blackContainerStyle}>
                <RadioGroup onSelectedChoice={handleChoiceSelect}>
                    <RadioButton value={value[0]} label={text[0]} hidden={hidden[0]}/>
                    <RadioButton value={value[1]} label={text[1]} hidden={hidden[1]}/>
                    <RadioButton value={value[2]} label={text[2]} hidden={hidden[2]}/>
                </RadioGroup>                
            </div>
        </Background>
    )
}

export default TheSister1ChoiceContainerBottom;