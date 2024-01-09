import React from 'react';

const BreakLine = ({ quantity }) => {
    const brArray = Array.from({ length: quantity }, (_, index) => index);

    return (
        <>
        {brArray.map((_, index) => (
            <br key={index} />
        ))}
        </>
    );
};

export default BreakLine;
