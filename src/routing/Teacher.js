import React from "react";
import CreateExam from "../Component/createExam/CreateExam";
import ViewExam from "../Component/createExam/ViewExam";
import ViewStudent from "../Component/createExam/ViewStudent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResetPassword from "../Component/auth/ResetPassword";

const Teacher = () => {
  return (
    <>
      <h4> teacher component</h4>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create_exam">CreateExam</Link>
            </li>
            <li>
              <Link to="/view_exam">View Exam</Link>
            </li>
            <li>
              <Link to="/view_student">View Student for Exam</Link>
            </li>
            <li>
              <Link to="/resetPassword">Reset Password</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>

        <Route path="/create_exam" component={CreateExam} />
        <Route path="/view_exam" component={ViewExam} />
        <Route path="/view_student" component={ViewStudent} />
        <Route path="/resetPassWord" component={ResetPassword} />
      </div>
    </>
  );
};

export default Teacher;
