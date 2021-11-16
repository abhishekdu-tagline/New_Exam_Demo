import React from "react";
import { formAttributes } from "../../redux/constaints/newPasswordfiled";
import Form from "../../reusable/Form";

import useNewPassword from "../hooks/useNewPassword";

const NewPassword = () => {
  const [newPassword, error, onChange, handlePasswordSubmit] = useNewPassword();
  console.log("Error is", error);

  const buttonAttributes = {
    type: "button",
    value: "setNewPassword",
    name: "newPassword",
    onClick: handlePasswordSubmit,
  };

  return (
    <>
      <h4> New Password</h4>
      <Form {...{ formAttributes, onChange, buttonAttributes }} />
      {/* {Object.entries(newPassword).map(([key, val], index) => {
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
      </button> */}
    </>
  );
};

export default NewPassword;
