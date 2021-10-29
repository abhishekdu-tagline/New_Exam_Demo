import React from "react";
import { useSelector } from "react-redux";
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
      {/* {Object.entries(userData).map(([key, val], index) => {
        console.log([key, val]);
        return (
          <React.Fragment key={index}>
            <input
              type={key === "email" ? "email" : "password"}
              name={key}
              value={val}
              placeholder={key}
              onChange={onChange}
            />
            {key === "email" ? error.email && <p>{error.email}</p> : ""}
            {key === "password"
              ? error.password && <p>{error.password}</p>
              : ""}

            <br />
          </React.Fragment>
        );
      })} */}
      <Form formData={userData} onChange={onChange} error={error} />
      <br />
      <Button buttonName="Login" handleSubmit={handleLogin} />
      <br /> <br />
      <Link to="/forgot_password">Forgot Password</Link> <br />
      <Link to="/signUp">Sign Up</Link> <br />
      {/* <Form formData={userData} /> */}
    </>
  );
};

export default Login;
