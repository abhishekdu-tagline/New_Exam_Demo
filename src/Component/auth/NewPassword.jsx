import React from "react";
import { formAttributes } from "../../redux/constaints/newPasswordfiled";
import Form from "../../reusable/Form";

import useNewPassword from "../hooks/useNewPassword";

const NewPassword = () => {
  const [newPassword, error, onChange, handlePasswordSubmit] = useNewPassword();
  console.log("Error is", error);
  console.log(`new Password is`, newPassword);

  const buttonAttributes = {
    type: "button",
    value: "setNewPassword",
    name: "newPassword",
    onClick: handlePasswordSubmit,
  };

  return (
    <>
      <h4> New Password</h4>
      <Form {...{ formAttributes, onChange, buttonAttributes, error }} />
    </>
  );
};

export default NewPassword;
