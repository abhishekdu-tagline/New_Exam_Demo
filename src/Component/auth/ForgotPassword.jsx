import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/actions/authAction";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name and value is", name, value);
    setEmail({ [name]: value });
  };

  console.log("Email is", email);

  return (
    <>
      <h4> Forgot Password </h4>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address..."
        onChange={handleChange}
      />{" "}
      <br /> <br />
      <button
        type="button"
        onClick={() => {
          dispatch(forgotPassword(email));
        }}
      >
        Send Link
      </button>
    </>
  );
};

export default ForgotPassword;
