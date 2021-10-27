import React from "react";
import useGiveExam from "../hooks/useGiveExam";

const ExamPaper = () => {
  const [handleChange, submitAnswer, giveExam, examData] = useGiveExam() || [];
  console.log("give Exam Current Data is", giveExam);

  return (
    <>
      {giveExam.currentIndexData.map((item, index) => {
        return (
          <>
            <div key={index}>
              {item.question}
              <br /> <br />
              {item.options.map((opt, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      name="answer"
                      value={opt}
                      checked={opt === giveExam.selectAnswer}
                      onChange={(e) => {
                        handleChange(e, item._id);
                      }}
                    />
                    <span>{opt}</span> <br />
                  </>
                );
              })}
            </div>
          </>
        );
      })}
      <br />
      <button type="button" name="submit" onClick={submitAnswer}>
        Submit Answer{" "}
      </button>
      {giveExam.currentIndex === examData.length - 1 ? (
        <button type="button" name="finishExam" onClick={handleChange}>
          Finish Exam
        </button>
      ) : (
        <button type="button" name="next" onClick={handleChange}>
          Next{" "}
        </button>
      )}
    </>
  );
};

export default ExamPaper;
