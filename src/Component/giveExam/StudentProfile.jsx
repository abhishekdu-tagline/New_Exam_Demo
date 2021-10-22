import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeStudent,
  studentProfileAction,
  updateStudentProfile,
} from "../../redux/actions/studentProfileAction";

const StudentProfile = () => {
  const baseUrl =
    "https://nodejsexamination.herokuapp.com/student/getStudentDetail";

  const putUrl =
    "https://nodejsexamination.herokuapp.com/student/studentProfile";
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    dispatch(studentProfileAction(baseUrl));
  }, []);

  const state = useSelector((state) => state.studentReducer);
  console.log(state);
  const { studentProfile } = state;
  // const keys = Object.keys(studentProfile) || [];
  // const fillterKeys = keys.filter((item) => {
  //   return item !== "_id";
  // });
  // console.log(`student Profile`, fillterKeys);

  const editProfile = () => {
    setIsEditable(true);
  };
  const updateProfile = () => {
    setIsEditable(false);
    dispatch(updateStudentProfile(putUrl, studentProfile));
  };
  return (
    <>
      <from>
        <label> Name</label> :- &nbsp;
        {isEditable ? (
          <>
            <input
              type="text"
              name="name"
              value={studentProfile.name}
              onChange={(e) => dispatch(onChangeStudent(e.target.value))}
            />
            <button
              type="button"
              onClick={() => {
                setIsEditable(false);
              }}
            >
              cancel
            </button>
          </>
        ) : (
          <>
            <span> {studentProfile.name}</span>
            <button type="button" onClick={editProfile}>
              Edit
            </button>
          </>
        )}{" "}
        <br /> <br />
        <label>Email Address</label> :- &nbsp;
        {studentProfile.email} <br /> <br />
        <label>Role</label> :- &nbsp;
        {studentProfile.role} <br /> <br />
        {isEditable ? (
          <button type="button" onClick={updateProfile}>
            Update Profile
          </button>
        ) : (
          ""
        )}
      </from>
    </>
  );
};

export default StudentProfile;
