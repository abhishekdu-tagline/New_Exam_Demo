import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

const Student = () => {
  // console.log("Student Component is called");
  return (
    <>
      {" "}
      STUDENT
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/view_profile">View Profile</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Student;
