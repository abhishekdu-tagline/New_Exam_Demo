import React from "react";
import Form from "../../reusable/Form";
import useResetPassword from "../hooks/useResetPassword";
import { formAttributes } from "../../redux/constaints/resetPasswordFileds";

const ResetPassword = () => {
  const [resetPassword, error, onChange] = useResetPassword();
  const buttonAttributes = {
    type: "button",
    value: "resetPassword",
    name: "resetPassword",
    onClick: onChange,
  };

  return (
    <>
      <h4>Reset Password Component</h4>

      <Form {...{ formAttributes, onChange, buttonAttributes, error }} />
    </>
  );
};

export default ResetPassword;
