import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { examListAction } from "../../redux/actions/ExamListAction";
import { showExamPaper } from "../../redux/actions/viewExamPaperAction";
import Table from "../../reusable/Table";
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

  const tableHeader = [
    {
      id: 1,
      label: "notes",
      name: "notes",
    },
    {
      id: 2,
      label: "subjectName",
      name: "subjectName",
    },
    {
      id: 3,
      label: "email",
      name: "email",
    },
  ];

  const buttonAttributes = [
    {
      value: "ViewExam",
      name: "viewExam",
      type: "button",
      typeOf: "viewExam",
      onClick: (_id) => {
        dispatch(showExamPaper(_id, history));
      },
    },
  ];
  return (
    <>
      <h4>Student Exam</h4>
      <Table
        cols={tableHeader}
        tableData={examList}
        buttonAttributes={buttonAttributes}
      />
    </>
  );
};

export default Exam;
