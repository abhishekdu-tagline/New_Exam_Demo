import React from "react";

const RadioButton = ({ onChange, name, value, isSelected }) => {
  // console.log(`name is `, name);
  return (
    <>
      <input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={isSelected}
      />
    </>
  );
};

export default RadioButton;
