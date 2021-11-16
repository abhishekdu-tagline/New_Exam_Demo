import React from "react";
import Form from "../../reusable/Form";
import Button from "../../reusable/Button";
import useGiveExam from "../hooks/useGiveExam";
import { formAttributes } from "../../redux/constaints/giveExamFileds";

const ExamPaper = () => {
  const [handleChange, submitAnswer, giveExam, examData] = useGiveExam() || [];

  const btnStatus = giveExam.currentIndex === examData.length - 1;
  const buttonAttributes = [
    {
      value: "submitAnswer",
      name: "submitAnswer",
      type: "button",
      typeOf: "submitAnswer",
      onClick: submitAnswer,
    },
    {
      value: btnStatus ? "finishExam" : "next",
      name: btnStatus ? "finishExam" : "next",
      type: "button",
      typeOf: btnStatus ? "finishExam" : "next",
      onClick: handleChange,
    },
  ];

  return (
    <>
      <Form
        formAttributes={formAttributes}
        onChange={handleChange}
        buttonAttributes={buttonAttributes}
        currentQuestion={giveExam?.currentIndexData}
        selectedAnswer={giveExam?.selectAnswer}
      />
    </>
  );
};

export default ExamPaper;
