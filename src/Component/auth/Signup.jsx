import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { signupAction } from "../../redux/actions/authAction";
import { formAttributes } from "../../redux/constaints/signupFiled";
import Form from "../../reusable/Form";
import valid from "../../utils/valid";
export const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const onChange = (e) => {
    console.log("SignUp onChange");
    const { name, value } = e.target;
    console.log(`name and value are ${name} and ${value}`);
    const userCloned = { ...userData };
    if (
      name === "name" ||
      name === "email" ||
      name === "password" ||
      name === "role"
    ) {
      userCloned[name] = value;
      setError((error) => ({
        ...error,
        [name]: valid(name, value),
      }));
    }

    setUserData(userCloned);
    console.log("usrClone is after OnChange", userCloned);
  };

  const handleSubmit = () => {
    console.log(`handle Submit is called`);
    let validationError = {};

    Object.keys(userData).forEach((name) => {
      const error = valid(name, userData[name]);

      if (error && error.length > 0) {
        validationError[name] = error;
      }
    });

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    }

    if (Object.keys(validationError).length === 0) {
      dispatch(signupAction(userData, history));
    }
  };

  console.log("Error is", error);

  const buttonAttributes = {
    type: "button",
    value: "SignUp",
    name: "signUp",
    onClick: handleSubmit,
  };

  // console.log("button attributes", buttonAttributes);

  return (
    <>
      <h4>Sign up</h4>
      {/* <Form formAttributes={formAttributes} /> */}
      <Form {...{ formAttributes, onChange, buttonAttributes, error }} />
      <Link to="/">Back to Login</Link> <br />
    </>
  );
};
