import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import EerieButton from '../../components/EeerieButton';
import IntroForAllTextBottomContainer from './IntroForAllTextBottomContainer';

function IntroForAll() {
    const navigate = useNavigate();
    const [showChoices, setShowChoices] = useState(false);
    const [, setCurrentPartIndex] = useState(0);

    const scene1 = 'Under the moonlight, you, a supernatural hunter, approach a decrepit mansion, its shattered windows whispering of hidden secrets and unseen dangers';
    const scene2 = 'Upon entering, reality twists and warps, transporting you to a surreal dimension pulsating with ancient energy';
    const scene3 = 'As you venture, 4 diverging pathways materialize. The very essence of your existence trembles, urging you to make a choice';

    const storyText = scene1 + '\n' + scene2 + '\n' + scene3;

    const imageBackgrounds = [
        'supernatural_hunter.jpg',
        'warping.jpg',
        'choose_path.jpg',
    ];
    
    const handleTextComplete = (currentPartIndex) => {
        setCurrentPartIndex(currentPartIndex);
        setShowChoices(true);
    };
    
    const handleClick = (e) => {
        navigate('/');
    }

    
    return (
        <>
            <div>
                <EerieButton className="Z-index-topLeft" onClick={handleClick} value="exit" text={'X'}/>
            </div>
            {
                showChoices 
                ? ( navigate('/character') ) 
                : ( <IntroForAllTextBottomContainer text={storyText} onTextComplete={handleTextComplete} image={imageBackgrounds}/> )
            }
        </>
    );
}

export default IntroForAll;