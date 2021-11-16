import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setNewPasswordAction } from "../../redux/actions/authAction";
import fromValidation from "../../utils/formValidation";
import valid from "../../utils/valid";

const useNewPassword = () => {
  const [newPassword, setNewPassword] = useState({
    Password: "",
    ConfirmPassword: "",
  });

  const [error, setError] = useState();

  const location = useLocation();
  const searchToken = location.search;
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    const passWordCloned = { ...newPassword };
    if (name === "Password" || name === "ConfirmPassword") {
      //   setError(validation);
      passWordCloned[name] = value;
      setError((error) => ({
        ...error,
        [name]: valid(name, value, newPassword),
      }));
    }

    // if (name === "newPassword") {
    //   console.log("Object value is", passWordCloned);
    //   const validation = fromValidation(name, passWordCloned);
    //   setError(validation);
    //   console.log("Validation on Button Click", validation);
    //   // if (Object.keys(validation).length === 0) {
    //   //   dispatch(setNewPasswordAction(newPassword, searchToken, history));
    //   // }
    // }

    setNewPassword(passWordCloned);
  };

  const handlePasswordSubmit = () => {
    let validationErrors = {};

    Object.keys(newPassword).forEach((name) => {
      const error = valid(name, newPassword[name], newPassword);

      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    }

    if (Object.keys(validationErrors).length === 0) {
      dispatch(setNewPasswordAction(newPassword, searchToken, history));
    }
  };

  return [newPassword, error, onChange, handlePasswordSubmit];
};

export default useNewPassword;
