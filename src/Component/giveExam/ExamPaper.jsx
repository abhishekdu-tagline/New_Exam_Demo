import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ExamPaper = () => {
  // const [examData, setExamData] = useState(
  //   JSON.parse(localStorage.getItem("exam")) || []
  // );
  const examData = JSON.parse(localStorage.getItem("exam")) || [];

  const [giveExam, setGiveExam] = useState(
    {
      currentObj: JSON.parse(localStorage.getItem("currentQuestion")) || {},
      selectAnswer: localStorage.getItem("selectedOption"),
      currentIndexData: [],
      examArray: localStorage.getItem("examArray") || [],
    } || {}
  );

  const [currentIndex, setCurrentIndex] = useState(
    JSON.parse(localStorage.getItem("index")) || 0
  );

  useEffect(() => {
    console.log("Current index: " + currentIndex);
    localStorage.setItem("index", currentIndex);
    const currentData = examData.filter((item, index) => {
      return index === currentIndex;
    });
    setGiveExam({ ...giveExam, currentIndexData: currentData });
  }, [currentIndex]);

  useEffect(() => {
    console.log("give Exam Object is inside useEffect", giveExam);
  }, [giveExam]);

  const { id } = useParams();
  console.log(`id is`, id);

  const handleChange = (e, question) => {
    localStorage.setItem("selectedOption", e.target.value);
    const { name, value } = e.target;
    if (name === "answer") {
      const obj = { question: question, answer: value };
      localStorage.setItem("currentQuestion", JSON.stringify(obj));
      setGiveExam({ ...giveExam, selectAnswer: value, currentObj: obj });
    }
    // setExamObj(obj);
    // setGiveExam({ ...giveExam, selectAnswer: e.target.value });
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setGiveExam({ ...giveExam, selectAnswer: "" });
  };

  const submitAnswer = () => {
    console.log("hello");
    console.log("current Question is", giveExam.currentObj);
    const currentQuestion = JSON.parse(localStorage.getItem("currentQuestion"));
    if (giveExam?.examArray?.length !== 7) {
      setGiveExam({
        ...giveExam,
        examArray: [...giveExam.examArray, currentQuestion],
      });
    }
  };

  console.log(`exam Array is`, giveExam.examArray);

  return (
    <>
      {console.log("is render ............")}
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
      <button type="button" name="next" onClick={handleNext}>
        Next{" "}
      </button>
    </>
  );
};

export default ExamPaper;
