import React from "react";
import Form from "../../reusable/Form";
import Button from "../../reusable/Button";
import useGiveExam from "../hooks/useGiveExam";

const ExamPaper = () => {
  const [handleChange, submitAnswer, giveExam, examData] = useGiveExam() || [];
  console.log("give Exam Current Data is", giveExam?.currentIndexData);
  console.log("selected Answer is", giveExam?.selectedAnswer);

  return (
    <>
      <form>
        <Form formId="giveExam" formData={giveExam} onChange={handleChange} />
        <Button buttonName="submit" handleSubmit={submitAnswer} />

        {giveExam.currentIndex === examData.length - 1 ? (
          <Button buttonName="finishExam" handleSubmit={handleChange} />
        ) : (
          <Button buttonName="next" handleSubmit={handleChange} />
        )}
      </form>
      <br />
    </>
  );
};

export default ExamPaper;
