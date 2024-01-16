import { useState } from 'react';
import Background from '../../components/Background.js';
import {RadioGroup, RadioButton} from '../../components/RadioButton.js'

const TheSister1ChoiceContainerBottom = ({ image }) => {
    const [currentPartIndex] = useState(0);

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
        <Background backgroundImage={require(`./img/${image[currentPartIndex]}`)}>
            <div style={blackContainerStyle}>
                <RadioGroup>
                    <RadioButton value="option1" label="Option 1" />
                    <RadioButton value="option2" label="Option 2" />
                    <RadioButton value="option3" label="Option 3" />
                </RadioGroup>
            </div>
        </Background>
    )
}

export default TheSister1ChoiceContainerBottom;