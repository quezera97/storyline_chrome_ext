import React from 'react';

// function TitleText(props) {
//     const { text, className } = props;

//     return (
//         <h1 className={className}>{text}</h1>
//     );
// }

const TitleText = ({ text, className }) => {
    return (
        <h1 className={className}>
            {text}
        </h1>
    );
};

export default TitleText;
