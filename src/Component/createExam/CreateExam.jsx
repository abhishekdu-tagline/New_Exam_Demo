import React from "react";
import useCreateExam from "../hooks/useCreateExam";
import Form from "../../reusable/Form";
import DropDownMenu from "../../reusable/DropDownMenu";
import Button from "../../reusable/Button";
import { formAttributes } from "../../redux/constaints/createExamFiled";

const CreateExam = () => {
  // console.log("Create Exam Rendering");
  const [exam, buttonStatus, error, onChange, clearData, createExam] =
    useCreateExam();
  const baseUrl =
    "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam";

  console.log("Final Exam Object is", exam);
  const subjectNames = [
    {
      value: "ReactJS",
      label: "ReactJS",
    },
    {
      value: "AngularJS",
      label: "AngularJS",
    },
  ];
  const buttonAttributes = {};
  return (
    <>
      <Form {...{ formAttributes, onChange, buttonAttributes }} />
    </>
  );
};

export default CreateExam;
