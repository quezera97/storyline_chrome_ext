import React, { useState } from 'react';

const RadioGroup = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState(null);
  
    const handleRadioChange = (value) => {
      setSelectedValue(value);
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
  
  const RadioButton = ({ value, label, selected, onChange }) => {
    return (
      <label>
        <input type="radio" value={value} checked={selected} onChange={onChange} />
        {label}
      </label>
    );
  };

  export {RadioGroup, RadioButton};