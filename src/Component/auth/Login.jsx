import React from "react";
import { Link } from "react-router-dom";
import { formAttributes } from "../../redux/constaints/loginFiled";
import Button from "../../reusable/Button";
import Form from "../../reusable/Form";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [userData, error, onChange, handleLogin] = useLogin() || [];
  console.log("userData: " + JSON.stringify(userData));

  const buttonAttributes = {
    type: "button",
    value: "Login",
    name: "login",
    onClick: handleLogin,
  };

  // console.log(`error is login form `, error);

  return (
    <>
      <h4> Login </h4>
      {/* <form>
        <Form
          formId="logIn"
          formData={userData}
          onChange={onChange}
          error={error}
        />
        <br />
        <Button buttonName="Login" handleSubmit={handleLogin} />
        <br /> <br />
      </form> */}
      <Form {...{ formAttributes, onChange, buttonAttributes, error }} />
      <Link to="/forgot_password">Forgot Password</Link> <br />
      <Link to="/signUp">Sign Up</Link> <br />
    </>
  );
};

export default Login;
