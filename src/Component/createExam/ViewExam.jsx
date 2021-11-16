import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteExams } from "../../redux/actions/deleteExamAction";
import { viewExams } from "../../redux/actions/viewExamAction";
import Table from "../../reusable/Table";

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

  // const tableData = tableHeaderList.filter((th) => {
  //   return th !== "_id" && th !== "__v" && th !== "email";
  // });

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
  ];

  const buttonAttributes = [
    {
      value: "delete",
      name: "delete",
      type: "button",
      typeOf: "delete",
      onClick: (_id) => dispatch(deleteExams(_id, history)),
    },
    {
      value: "edit",
      name: "edit",
      type: "button",
      typeOf: "edit",
      onClick: (_id) => {
        history.push(`/edit_exam/${_id}`);
      },
    },
  ];

  return (
    <>
      <Table
        cols={tableHeader}
        tableData={viewExam}
        buttonAttributes={buttonAttributes}
      />
    </>
  );
};

export default ViewExam;
