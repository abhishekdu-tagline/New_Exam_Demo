import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { giveExamActions } from "../../redux/actions/giveExam";
import { useDispatch } from "react-redux";

const ExamPaper = () => {
  // const [examData, setExamData] = useState(
  //   JSON.parse(localStorage.getItem("exam")) || []
  // );
  const examData = JSON.parse(localStorage.getItem("exam")) || [];

  const [giveExam, setGiveExam] = useState(
    {
      currentIndex: JSON.parse(localStorage.getItem("index")) || 0,
      currentObj: JSON.parse(localStorage.getItem("currentQuestion")) || {},
      selectAnswer: localStorage.getItem("selectedOption"),
      currentIndexData: JSON.parse(localStorage.getItem("currentData")) || [],
      examArray: JSON.parse(localStorage.getItem("examArray")) || [],
    } || {}
  );

  const { id } = useParams();
  const dispatch = useDispatch();
  const baseUrl = `https://nodejsexamination.herokuapp.com/student/giveExam?id=${id}`;
  // const [currentIndex, setCurrentIndex] = useState(
  //   JSON.parse(localStorage.getItem("index")) || 0
  // );

  const getCurrentData = () => {
    const currentData = examData.filter((item, index) => {
      return index === giveExam.currentIndex;
    });

    return currentData;
  };

  useEffect(() => {
    localStorage.setItem("index", giveExam.currentIndex);
    let myData = getCurrentData();
    console.log("render......");
    localStorage.setItem("currentData", JSON.stringify(myData));
    setGiveExam({ ...giveExam, currentIndexData: myData });
  }, []);

  useEffect(() => {
    localStorage.setItem("examArray", JSON.stringify(giveExam.examArray));
  }, [giveExam]);

  const handleChange = (e, question) => {
    localStorage.setItem("selectedOption", e.target.value);
    const { name, value } = e.target;
    const giveExamCloned = { ...giveExam };
    if (name === "answer") {
      const obj = { question: question, answer: value };
      localStorage.setItem("currentQuestion", JSON.stringify(obj));
      setGiveExam({ ...giveExam, selectAnswer: value, currentObj: obj });
    }

    if (name === "next") {
      giveExamCloned.currentIndex = giveExamCloned.currentIndex + 1;
      console.log("Current Index is " + giveExamCloned.currentIndex);
      localStorage.setItem("index", giveExamCloned.currentIndex);
      const currentData = examData.filter((item, index) => {
        return index === giveExamCloned.currentIndex;
      });
      console.log("Current Data is ", currentData);
      localStorage.setItem("currentData", JSON.stringify(currentData));
      giveExamCloned.currentIndexData = currentData;
      setGiveExam(giveExamCloned);
      giveExamCloned.selectAnswer = "";
    }

    if (name === "finishExam") {
      dispatch(giveExamActions(baseUrl, giveExam.examArray));
    }
  };

  const submitAnswer = () => {
    console.log("current Question is", giveExam.currentObj);
    const currentQuestion = JSON.parse(localStorage.getItem("currentQuestion"));
    if (giveExam?.examArray?.length !== 7) {
      setGiveExam({
        ...giveExam,
        examArray: [...giveExam.examArray, currentQuestion],
      });
    }
  };

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
