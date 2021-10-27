import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../../redux/actions/resetPasswordAction";
import { useHistory } from "react-router-dom";

const useResetPassword = () => {
  const [resetPassword, setResetPassword] = useState({
    oldPassword: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
 
  const formValidation = () => {
    let errorObject = {};

    //// old password validation
    if (!resetPassword.oldPassword) {
      errorObject.oldPassword = "Enter Your old Password .....";
    } else if (resetPassword.oldPassword.length < 8) {
      errorObject.oldPassword = "Password must be between 8 Character";
    }

    /// Reset Password validation
    if (!resetPassword.Password) {
      errorObject.Password = "Enter Your new Password .....";
    } else if (resetPassword.Password.length < 8) {
      errorObject.oldPassword = "Password must be between 8 Character";
    }

    //// Reset Password validation
    if (!resetPassword.ConfirmPassword) {
      errorObject.ConfirmPassword = "Enter Your new Confirm Password .....";
    } else if (resetPassword.ConfirmPassword.length < 8) {
      errorObject.oldPassword = "Password must be between 8 Character";
    }

    ///// Password and Confirm validation
    if (resetPassword.Password !== resetPassword.ConfirmPassword) {
      errorObject.ConfirmPassword =
        "Confirm PassWord is not match entered password ...";
    }

    setError(errorObject);
    return errorObject;
  };

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
      const errMsg = formValidation();
      if (Object.keys(errMsg).length === 0) {
        dispatch(resetPasswordAction(resetPassword, history));
      }
    }
    setResetPassword(passWordCloned);
  };

  return [resetPassword, error, handleNewPassword];
};

export default useResetPassword;
