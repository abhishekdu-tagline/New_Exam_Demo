import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Component/auth/Login";
import { Signup } from "../Component/auth/Signup";
import EditExam from "../Component/createExam/EditExam";
import Student from "./Student";
import Teacher from "./Teacher";

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

          {state?.role === "student" && <Student />}
          {state?.role === "teacher" && <Teacher />}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
