import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exam from "../Component/giveExam/Exam";
import ExamPaper from "../Component/giveExam/ExamPaper";
import StudentProfile from "../Component/giveExam/StudentProfile";
import ResetPassword from "../Component/auth/ResetPassword";

const Student = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/student_exam">Exams</Link>
            </li>
            <li>
              <Link to="/view_profile">View Profile</Link>
            </li>
            <li>
              <Link to="/resetPassword">Reset Password</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>

        <Route path="/student_exam" component={Exam} />
        <Route path="/view_profile" component={StudentProfile} />
        <Route path="/view_exam/:id" component={ExamPaper} />
        <Route path="/resetPassWord" component={ResetPassword} />
      </div>
    </>
  );
};

export default Student;
