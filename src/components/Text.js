import React from 'react';

// function Text(props) {
//     const { text, className } = props;

//     return (
//         <h1 className={className}>{text}</h1>
//     );
// }

const Text = ({ text, className }) => {
    return (
        <p className={className}>
            {text}
        </p>
    );
};

export default Text;
