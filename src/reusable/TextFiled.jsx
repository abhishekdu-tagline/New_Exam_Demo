import React from "react";

const TextFiled = ({ name, onChange, error, val }) => {
  // console.log("Props is", props);
  // const { name, onChange, error, val } = props;
  console.log("Error is", error);
  // console.log("name is", name);

  //   console.log("name is", name);
  return (
    <>
      <input
        type={name === "password" ? "password" : "text"}
        name={name}
        placeholder={`Enter ${name} `}
        value={val}
        onChange={onChange}
      />

      <br />
    </>
  );
};

export default TextFiled;
