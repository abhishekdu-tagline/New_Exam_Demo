import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../../redux/actions/authAction";

const useLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
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
    }

    if (name === "login") {
      console.log("Cloned is", cloned);
      const config = {
        method: "post",
        url: "https://nodejsexamination.herokuapp.com/users/Login",
        data: cloned,
        headers: headers,
      };
      dispatch(loginAction(config, history));
    }

    setUserData(cloned);
  };

  return [userData, onChange];
};

export default useLogin;
