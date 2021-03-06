import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupAction } from "../../redux/actions/authAction";
import Button from "../../reusable/Button";
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
  console.log("Redux Store Data is", state);

  const validation = (userObj) => {
    let errorMessage = {};

    /// name Validation
    if (!userObj.name) {
      errorMessage.name = "Enter your name";
    }

    //// Email Validation
    if (!userObj.email) {
      errorMessage.email = "Please enter your email";
    }

    /// password Validation
    if (!userObj.password) {
      errorMessage.password = "Please enter your password";
    } else if (userObj.password.length < 8) {
      errorMessage.password = "Password must be 8 or more characters";
    }

    /// Role Validation
    if (!userObj.role) {
      errorMessage.role = "Please Enter your role";
    }
    setError(errorMessage);
    return errorMessage;
  };

  const onChange = (e) => {
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

    // if (name === "signUp") {
    //   // const errMsg = validation(userData);
    //   const errMsg = valid(userData);
    //   if (Object.keys(errMsg).length === 0) {
    //   }
    // }
    setUserData(userCloned);
  };

  const handleSubmit = () => {
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

  // console.log("Error is", error);
  return (
    <>
      <h4>Sign up</h4>
      {/* {Object.entries(userData).map(([key, val], index) => {
        return (
          <React.Fragment key={index}>
            <input
              type={
                key === "name"
                  ? "text"
                  : key === "password"
                  ? "password"
                  : key === "email"
                  ? "email"
                  : "text"
              }
              name={key}
              value={val}
              placeholder={key}
              onChange={onChange}
            />
            {key === "name" ? error.name && <p>{error.name}</p> : ""}
            {key === "email" ? error.email && <p>{error.email}</p> : ""}
            {key === "password"
              ? error.password && <p>{error.password}</p>
              : ""}
            {key === "role" ? error.role && <p>{error.role}</p> : ""}
            <br />
          </React.Fragment>
        );
      })} */}

      <Form formData={userData} onChange={onChange} error={error} />
      <br />
      <Button buttonName="signUp" handleSubmit={handleSubmit} />
      {/* <button type="button" name="signUp" onClick={handleSubmit}>
        SignUp
      </button> */}
    </>
  );
};
