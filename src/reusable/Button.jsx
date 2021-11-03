import React from "react";

const Button = ({ buttonData }) => {
  const { type, value, name, onClick } = buttonData;
  console.log(`button type is`, type);
  console.log(`button type is`, value);
  console.log(`button type is`, name);
  console.log(`button type is`, onClick);
  return (
    <>
      <button type={type} name={name} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Button;
