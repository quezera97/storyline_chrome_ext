import { useState } from 'react';
import Background from '../../components/Background.js';
import {RadioGroup, RadioButton} from '../../components/RadioButton.js'

const TheSister1ChoiceContainerBottom = ({ image, imageIndex, text, value, hidden, onChoiceSelect }) => {
    const [imagePath, setImagePath] = useState(image[imageIndex]);

    const handleChoiceSelect = (selectedValue) => {
        onChoiceSelect(selectedValue);
        switch (selectedValue) {
            case 'give':
                setImagePath('person_give_food.jpg');
                break;
            case 'push':
                setImagePath('person_push.jpg');
                break;
            case 'check':
                setImagePath('check_condition.jpg');
                break;
            case 'fled':
                setImagePath('fled_scene.jpg');
                break;
            case 'accept':
                setImagePath('accept_offer.jpg');
                break;
            case 'reject':
                setImagePath('reject_offer.jpg');
                break;
            case 'kick':
                setImagePath('kick_door.jpg');
                break;
            case 'jump':
                setImagePath('jump_room.jpg');
                break;
            case 'play':
                setImagePath('play_with_dolls.jpg');
                break;
            case 'run':
                setImagePath('run_away.jpg');
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