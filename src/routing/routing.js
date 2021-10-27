import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Component/auth/Login";

import { Signup } from "../Component/auth/Signup";
import EditExam from "../Component/createExam/EditExam";
import Student from "./Student";
import Teacher from "./Teacher";
import ForgotPassword from "../Component/auth/ForgotPassword";
import NewPassword from "../Component/auth/NewPassword";

const Routes = () => {
  const state = useSelector((state) => state.authReducer.loginUser.data);
  console.log("Login user state: ", state);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/edit_exam/:id" component={EditExam} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/newPassWord" component={NewPassword} />

          {state?.role === "student" && <Student />}
          {state?.role === "teacher" && <Teacher />}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
