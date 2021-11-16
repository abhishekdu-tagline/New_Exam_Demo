import React from "react";

const TextFiled = ({ item, onChange, value, ...otherPros }) => {
  // console.log(`value is`, value);
  // console.log(`other Props is`, otherPros);
  return (
    <>
      <input onChange={onChange} value={value} {...otherPros} />

      <br />
    </>
  );
};

export default TextFiled;
