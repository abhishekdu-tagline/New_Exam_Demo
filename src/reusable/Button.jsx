import React from "react";

const Button = ({ children, ...otherProps }) => {
  // console.log(`other props is`, otherProps);
  return (
    <>
      <button {...otherProps}>{children}</button>
    </>
  );
};

export default Button;
