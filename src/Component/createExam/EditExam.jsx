import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { updateExam } from "../../redux/actions/editExamAction";

const EditExam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [subjectName, setSubjetName] = useState({ subjectName: "" });
  //   const state = useSelector((state) => state.examReducer.viewExams);

  const handleChange = (e) => {
    console.log("run");
    const { value } = e.target;
    setSubjetName({ ...subjectName, subjectName: value });
  };

  return (
    <>
      <h4>update exam</h4>

      <form>
        <label>Subject Name</label>
        <select name="subjectName" onChange={handleChange}>
          <option value="ReactJS">ReactJS</option>
          <option value="AngularJS">AngularJS</option>
          <option value="Django">Django</option>
          <option value="Laravel">Laravel</option>
          <option value="Javascript">Javascript</option>
          <option value="PHP">PHP</option>
          <option value="SQL">SQL</option>
          <option value="Node JS">Node JS</option>
          <option value="ASP.net">ASP.net</option>
        </select>{" "}
        <br />
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            dispatch(updateExam(subjectName, id, history));
          }}
        >
          Update Exam
        </button>
      </form>
    </>
  );
};

export default EditExam;
