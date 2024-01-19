import React from 'react';

const Text = ({ text, className, style }) => {
    const textStyle = {
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        ...style,
    };

    return (
        <p className={className} style={textStyle}>
            {text}
        </p>
    );
};

export default Text;
