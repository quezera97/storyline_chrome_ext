import React from 'react';
import profilePicture from '../assets/img/icon.jpg';

const ProfilePicture = ({ className }) => {
    return (
        <>
            <img
                className={className}
                style={{ maxWidth: '150px', maxHeight: '150px', border: '5px solid black'}}
                src={profilePicture} alt='Profile'
            />
        </>
    );
};

export default ProfilePicture;
