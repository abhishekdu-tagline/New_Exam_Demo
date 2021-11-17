import React from "react";

const TextFiled = ({ item, onChange, value, error, ...otherPros }) => {
  console.log(`error in validation `, error);
  return (
    <>
      <input onChange={onChange} value={value} {...otherPros} />
      {typeof error === "string" && <p style={{ color: "red" }}>{error}</p>}
      {error?.[otherPros?.name] && (
        <p style={{ color: "red" }}>{error?.[otherPros?.name]}</p>
      )}
      <br />
    </>
  );
};

export default TextFiled;
