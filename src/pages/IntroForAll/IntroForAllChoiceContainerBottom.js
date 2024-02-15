import { useState } from 'react';
import {RadioGroup, RadioButton} from '../../components/RadioButton.js'
import Background from '../../components/Background.js';

const IntroForAllChoiceContainerBottom = ({ image, imageIndex, text, value, hidden, onChoiceSelect }) => {
    const [imagePath, setImagePath] = useState(image[imageIndex]);

    const handleChoiceSelect = (selectedValue) => {
        onChoiceSelect(selectedValue);
        switch (selectedValue) {
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
                    <RadioButton value={value[3]} label={text[3]} hidden={hidden[3]}/>
                </RadioGroup>                
            </div>
        </Background>
    )
}

export default IntroForAllChoiceContainerBottom;