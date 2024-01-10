import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-family: 'Creepster', cursive;
    width: auto;
    height: auto;
    padding: 10px 20px;
    font-size: 25px;
    border: 2px solid #666;
    background-color: ${(props) => props.backgroundcolor || '#111'};
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    text-transform: uppercase;
    letter-spacing: 5px;

    &:hover {
        background-color: rgb(230, 61, 61);
        border-color: #999;
        color: #eee;
        transform: scale(1.05);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }

    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

`;

const EerieButton = ({ onClick, value, text, color }) => {
    const handleClick = (e) => {
      onClick(value);
    };
  
    return (
      <Button onClick={handleClick} data-value={value} backgroundcolor={color}>
        {text}
      </Button>
    );
  };

export default EerieButton;
