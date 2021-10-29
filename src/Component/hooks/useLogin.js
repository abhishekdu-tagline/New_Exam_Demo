import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../../redux/actions/authAction";
import valid from "../../utils/valid";

const useLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const headers = {
    "Content-Type": "application/json",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const cloned = { ...userData };
    if (name === "email" || name === "password") {
      cloned[name] = value;
      setError((error) => ({
        ...error,
        [name]: valid(name, value),
      }));
    }

    // if (name === "login") {
    //   console.log("Error is ", error);
    // }

    setUserData(cloned);
  };

  const handleLogin = () => {
    let validationErrors = {};

    Object.keys(userData).forEach((name) => {
      const error = valid(name, userData[name]);
      console.log("Error is ", error);

      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
      console.log("Error is", validationErrors);
    });

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("API call ........");
      const config = {
        method: "post",
        url: "https://nodejsexamination.herokuapp.com/users/Login",
        data: userData,
        headers: headers,
      };
      dispatch(loginAction(config, history));
    }
  };

  return [userData, error, onChange, handleLogin];
};

export default useLogin;
