import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteExams } from "../../redux/actions/deleteExamAction";
import { viewExams } from "../../redux/actions/viewExamAction";

const ViewExam = () => {
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const token = localStorage.getItem("jwt");
  console.log(token);

  const examHeaders = {
    "Content-Type": "application/json",
    "access-token": token,
  };

  const config = {
    method: "get",
    url: "https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam",
    headers: examHeaders,
  };

  useEffect(() => {
    if (!mount) {
      setMount(true);
      dispatch(viewExams(config));
    }
  }, [mount]);

  const state = useSelector((state) => state.createExamReducer) || [];
  const { viewExam } = state;
  const tableHeaderList = viewExam.length > 0 ? Object.keys(viewExam[0]) : [];
  const thead = tableHeaderList.filter((th) => {
    return th !== "_id" && th !== "__v" && th !== "email";
  });
  console.log(`table header List`, thead);

  return (
    <>
      ViewExam Component
      <table border="1">
        <thead>
          <tr>
            {thead.map((th, index) => {
              return (
                <React.Fragment key={index}>
                  <th>{th}</th>
                </React.Fragment>
              );
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {viewExam.map((exams) => {
            return (
              <tr key={exams._id}>
                <td>{exams.notes}</td>
                <td>{exams.subjectName}</td>

                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteExams(exams._id, history))}
                  >
                    Delete Exam
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      history.push(`/edit_exam/${exams._id}`);
                    }}
                  >
                    Edit Exam
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewExam;
