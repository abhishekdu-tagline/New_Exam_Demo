import React from "react";

const TextFiled = ({ onChange, ...otherPros }) => {
  return (
    <>
      <input onChange={onChange} {...otherPros} />

      <br />
    </>
  );
};

export default TextFiled;
