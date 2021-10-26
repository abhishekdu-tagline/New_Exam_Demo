import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [userData, onChange] = useLogin() || [];
  console.log("userData: " + JSON.stringify(userData));

  return (
    <>
      <h4> Login </h4>
      {Object.entries(userData).map(([key, val], index) => {
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
            <br />
          </React.Fragment>
        );
      })}
      <br />
      <button type="button" name="login" onClick={onChange}>
        login
      </button>{" "}
      <br /> <br />
      <Link to="/forgot_password">Forgot Password</Link> <br />
      <Link to="/resetPassWord">Reset Password</Link> <br />
    </>
  );
};

export default Login;
