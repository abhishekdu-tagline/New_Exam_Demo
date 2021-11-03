import React from "react";

const RadioButton = ({ name, value, onChange, checked }) => {
  // console.log("name: ", name);
  // console.log("value is ", value);
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
};

export default RadioButton;
