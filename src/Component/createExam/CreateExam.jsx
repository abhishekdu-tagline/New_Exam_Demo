import React from "react";
import useCreateExam from "../hooks/useCreateExam";
import Form from "../../reusable/Form";
import { formAttributes } from "../../redux/constaints/createExamFiled";

const CreateExam = () => {
  // console.log("Create Exam Rendering");
  const [
    exam,
    buttonStatus,
    error,
    onChange,
    clearData,
    createExam,
    nextQuestion,
    prevQuestion,
  ] = useCreateExam();
  const baseUrl =
    "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam";

  console.log("Final Exam Object is", exam);
  // console.log(`button Status is`, buttonStatus);
  console.log(`current Question is`, exam?.questions[exam?.currentIndex]);
  const subjectList = [
    {
      value: "ReactJS",
      label: "ReactJS",
    },
    {
      value: "AngularJS",
      label: "AngularJS",
    },
    {
      value: "Python",
      label: "Python",
    },
  ];

  const buttonAttributes = [
    {
      value: "prev",
      name: "prev",
      type: "button",
      typeOf: "prev",
      onClick: prevQuestion,
    },
    {
      value: "next",
      name: "next",
      type: "button",
      typeOf: "next",
      onClick: nextQuestion,
    },
    {
      value: "clear",
      name: "clear",
      type: "button",
      typeOf: "clear",
      onClick: () => {
        clearData(exam?.currentIndex);
      },
    },
    {
      value: buttonStatus ? "submit" : "update",
      name: buttonStatus ? "submit" : "update",
      type: "button",
      typeOf: "submit",
      onClick: buttonStatus
        ? () => {
            createExam(baseUrl);
          }
        : onChange,
    },
  ];

  return (
    <>
      {/* <Form {...{ formAttributes, onChange, buttonAttributes, selectListValues }} /> */}
      <Form
        formAttributes={formAttributes}
        onChange={onChange}
        buttonAttributes={buttonAttributes}
        selectListValues={subjectList}
        currentQuestion={exam.questions[exam.currentIndex]}
        textValue={exam.questions[exam.currentIndex].question}
        currentAnswer={exam.questions[exam.currentIndex].answer}
        error={error}
      />
    </>
  );
};

export default CreateExam;
