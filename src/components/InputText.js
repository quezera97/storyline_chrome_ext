import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-family: 'Creepster', cursive;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    padding: 10px 20px;
    font-size: 4vh;
    border: 2px solid #666;
    background-color: ${(props) => props.backgroundcolor || '#111'};
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    margin-right: 5px;
    margin-left: 5px;
    text-transform: uppercase;
    letter-spacing: 5px;

    &:hover {
        border-color: #999;
        color: #eee;
        transform: scale(0.95);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }

    &:focus {
        outline: none;
    }
`;

const EerieInput = ({ type, value, onChange, color, height, width, maxlength, ...restProps }) => {
    return (
        <Input
            as={type === 'text-area' ? 'textarea' : 'input'}
            value={value}
            onChange={onChange}
            backgroundcolor={color}
            height={height}
            width={width}
            maxLength={maxlength}
            {...restProps}
        />
    );
};

export default EerieInput;
