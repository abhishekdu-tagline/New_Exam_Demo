import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { examListAction } from "../../redux/actions/ExamListAction";
import { showExamPaper } from "../../redux/actions/viewExamPaperAction";
import { objectKeys } from "../../utils/regex";
const Exam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const baseUrl = "https://nodejsexamination.herokuapp.com/student/studentExam";
  const state = useSelector((state) => state.examPaperReducer);
  const { examList } = state || {};
  console.log(`exam List`, examList);

  useEffect(() => {
    if (examList.length === 0) {
      dispatch(examListAction(baseUrl));
    }
  }, []);
  const th = examList.length > 0 ? objectKeys(examList[0]) : []; /// Using regex Function
  const tableHeaderList = th.filter((item) => {
    return item !== "_id" && item !== "Result";
  });

  console.log(`tableHeader List is`, tableHeaderList);
  return (
    <>
      <h4>Student Exam</h4>
      <table border="1">
        <thead>
          <tr>
            {tableHeaderList.map((th, index) => {
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
          {examList.map((exams) => {
            return (
              <tr key={exams._id}>
                <td>{exams.notes}</td>
                <td>{exams.subjectName}</td>
                <td>{exams.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(showExamPaper(exams._id, history));
                    }}
                  >
                    View Exam Paper
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

export default Exam;
