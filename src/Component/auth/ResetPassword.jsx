import React from "react";
import Form from "../../reusable/Form";
import Button from "../../reusable/Button";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassword = () => {
  const [resetPassword, error, handleNewPassword] = useResetPassword();

  return (
    <>
      <h4>Reset Password Component</h4>
      <form>
        <Form
          formId="resetPassword"
          formData={resetPassword}
          onChange={handleNewPassword}
          error={error}
        />
        <Button buttonName="resetPassword" handleSubmit={handleNewPassword} />
      </form>
    </>
  );
};

export default ResetPassword;
