import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setNewPasswordAction } from "../../redux/actions/authAction";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState({
    Password: "",
    ConfirmPassword: "",
  });

  const location = useLocation();
  const searchToken = location.search;
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePassword = (e) => {
    const { name, value } = e.target;
    const passWordCloned = { ...newPassword };
    if (name === "Password" || name === "ConfirmPassword") {
      passWordCloned[name] = value;
    }

    if (name === "newPassword") {
      dispatch(setNewPasswordAction(newPassword, searchToken, history));
    }

    setNewPassword(passWordCloned);
  };

  return (
    <>
      <h4> New Password</h4>
      {Object.entries(newPassword).map(([key, val], index) => {
        return (
          <div key={index}>
            <input
              type={key === "ConfirmPassword" ? "password" : "password"}
              name={key}
              placeholder={key}
              onChange={handlePassword}
            />{" "}
            <br /> <br />
          </div>
        );
      })}
      <button type="button" name="newPassword" onClick={handlePassword}>
        Set New Password
      </button>
    </>
  );
};

export default NewPassword;
