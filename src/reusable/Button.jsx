import React from "react";

const Button = (props) => {
  console.log("Button Props is", props);
  const { buttonName, handleSubmit } = props;
  return (
    <>
      <button type="button" name={buttonName} onClick={handleSubmit}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
