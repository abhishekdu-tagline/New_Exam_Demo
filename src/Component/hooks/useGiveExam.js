import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { giveExamActions } from "../../redux/actions/giveExam";

const useGiveExam = () => {
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
    console.log("function is called");

    localStorage.setItem("selectedOption", e.target.value);
    const { name, value } = e.target;
    console.log("name and value is", name, value);
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
  return [handleChange, submitAnswer, giveExam, examData];
};

export default useGiveExam;
