import React from "react";

import useNewPassword from "../hooks/useNewPassword";

const NewPassword = () => {
  const [newPassword, error, handlePassword, handlePasswordSubmit] =
    useNewPassword();
  console.log("Error is", error);
  return (
    <>
      <h4> New Password</h4>
      {Object.entries(newPassword).map(([key, val], index) => {
        console.log([key, val]);
        return (
          <div key={index}>
            <input
              type={key === "ConfirmPassword" ? "password" : "password"}
              name={key}
              placeholder={key}
              value={val}
              onChange={handlePassword}
            />{" "}
            <br /> <br />
            {key === "Password"
              ? error?.Password && <p>{error?.Password}</p>
              : ""}
            {key === "ConfirmPassword"
              ? error?.ConfirmPassword && <p>{error?.ConfirmPassword}</p>
              : ""}
          </div>
        );
      })}
      <button type="button" name="newPassword" onClick={handlePasswordSubmit}>
        Set New Password
      </button>
    </>
  );
};

export default NewPassword;
