import React from "react";
import { Link } from "react-router-dom";
import Button from "../../reusable/Button";
import Form from "../../reusable/Form";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [userData, error, onChange, handleLogin] = useLogin() || [];
  console.log("userData: " + JSON.stringify(userData));

  return (
    <>
      <h4> Login </h4>
      <form>
        <Form
          formId="logIn"
          formData={userData}
          onChange={onChange}
          error={error}
        />
        <br />
        <Button buttonName="Login" handleSubmit={handleLogin} />
        <br /> <br />
      </form>
      <Link to="/forgot_password">Forgot Password</Link> <br />
      <Link to="/signUp">Sign Up</Link> <br />
    </>
  );
};

export default Login;
