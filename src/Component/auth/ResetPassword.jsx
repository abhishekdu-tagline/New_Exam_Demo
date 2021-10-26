import React, { useState } from "react";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState({
    oldPassword: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleNewPassword = (e) => {
    const { name, value } = e.target;
    const passWordCloned = { ...resetPassword };
    if (
      name === "oldPassword" ||
      name === "Password" ||
      name === "ConfirmPassword"
    ) {
      passWordCloned[name] = value;
    }

    if (name === "resetPassword") {
      console.log("passWordCloned is", passWordCloned);
    }
    setResetPassword(passWordCloned);
  };

  console.log("reset password is ", resetPassword);
  return (
    <>
      <h4>Reset Password Component</h4>
      {Object.entries(resetPassword).map(([key, val], index) => {
        return (
          <div key={index}>
            <input
              type={key}
              name={key}
              placeholder={key}
              value={val}
              onChange={handleNewPassword}
            />{" "}
            <br /> <br />
          </div>
        );
      })}
      <button type="button" name="resetPassword" onClick={handleNewPassword}>
        Reset Password
      </button>
    </>
  );
};

export default ResetPassword;
