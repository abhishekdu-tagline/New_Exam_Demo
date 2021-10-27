import React, { useState } from "react";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassword = () => {
  const [resetPassword, error, handleNewPassword] = useResetPassword();

  // });
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
            {key === "oldPassword"
              ? error.oldPassword && <p>{error.oldPassword}</p>
              : ""}
            {key === "Password"
              ? error.Password && <p>{error.Password}</p>
              : ""}
            {key === "ConfirmPassword"
              ? error.ConfirmPassword && <p>{error.ConfirmPassword}</p>
              : ""}
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
