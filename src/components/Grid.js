import React from 'react';
import TitleText from '../components/Text';
import ProfilePicture from './ProfilePicture';

const GridItem = ({ text, imageUrl }) => {
    return (
        <div className="grid-item">
            <TitleText className="White-text Eerie-text Small-text" text={text}/>
            <ProfilePicture imageUrl={imageUrl}/>
        </div>
    );
};

const Grid = ({ data }) => {
    return (
        <div className="grid-container">
        {data.map(item => (
            <GridItem key={item.id} text={item.text} imageUrl={item.imageUrl}/>
        ))}
        </div>
    );
};

export default Grid;
