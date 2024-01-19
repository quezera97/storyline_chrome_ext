import React from 'react';

const ProfilePicture = ({ className, imageUrl }) => {
    return (
        <>
            <img
                className={className}
                style={{ maxWidth: '150px', maxHeight: '150px', border: '5px solid black'}}
                src={imageUrl} alt='Profile'
            />
        </>
    );
};

export default ProfilePicture;
