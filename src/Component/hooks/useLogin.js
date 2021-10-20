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

  const onChange = (e) => {
    const { name, value } = e.target;
    const cloned = { ...userData };
    if (name === "email" || name === "password") {
      cloned[name] = value;
    }

    if (name === "login") {
      dispatch(loginAction(userData, history));
    }

    setUserData(cloned);
  };

  return [userData, onChange];
};

export default useLogin;
