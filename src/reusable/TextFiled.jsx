import React from "react";

const TextFiled = (props) => {
  //   console.log("Props is", props);
  const { name, onChange, error } = props;
  console.log("Error in TextFiled component");

  //   console.log("name is", name);
  return (
    <>
      <input
        type={name === "password" ? "password" : "text"}
        name={name}
        placeholder={`Enter ${name} `}
        onChange={onChange}
      />
    </>
  );
};

export default TextFiled;
