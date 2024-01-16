import React, { useState } from 'react';

const RadioGroup = ({ children, onSelectedChoice }) => {
    const [selectedValue, setSelectedValue] = useState(null);
  
    const handleRadioChange = (value) => {
      setSelectedValue(value);
      onSelectedChoice(value);
    };
  
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            selected: child.props.value === selectedValue,
            onChange: () => handleRadioChange(child.props.value),
          });
        })}
      </div>
    );
  };
  
  const RadioButton = ({ value, label, hidden, selected, onChange }) => {
    return (
      <div style={{ margin: '10px 0' }}>
        <label style={{ display: 'block' }}>
          <input type="radio" value={value} checked={selected} onChange={onChange} hidden={hidden}/>
          {hidden ? null : label}
        </label>
      </div>
    );
  };

  export {RadioGroup, RadioButton};