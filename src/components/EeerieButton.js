import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-family: 'Creepster', cursive;
    padding: 10px 20px;
    font-size: 25px;
    border: 2px solid #666;
    background-color: #111;
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    text-transform: uppercase;

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

const EerieButton = ({ onClick, value, text }) => {
    const handleClick = (e) => {
      onClick(e.target.dataset.value);
    };
  
    return (
      <Button onClick={handleClick} data-value={value}>
        {text}
      </Button>
    );
  };

export default EerieButton;
