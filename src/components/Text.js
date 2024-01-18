import React from 'react';

const Text = ({ text, className, style }) => {
    const textStyle = {
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        ...style,
    };

    return (
        <h6 className={className} style={textStyle}>
            {text}
        </h6>
    );
};

export default Text;
