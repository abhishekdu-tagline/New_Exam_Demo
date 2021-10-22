import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createExamActions } from "../../redux/actions/createExamAction";

const useCreateExam = () => {
  const [exam, setExam] = useState(
    {
      subjectName: "",
      questions: [
        {
          question: "",
          answer: "",
          options: ["", "", "", ""],
        },
      ],
      notes: ["10mins exam", "start time 10am"],
      currentIndex: 0,
    } || {}
  );

  const [buttonStatus, setButtonStatus] = useState(true);
  const dispatch = useDispatch();

  const onChange = (i) => (e) => {
    console.log("i is", i);
    const { name, value } = e.target;
    const examCloned = { ...exam };

    console.log("name and value is", name, value);

    if (name === "subjectName") {
      examCloned[name] = value;
    }

    if (name === "options") {
      examCloned.questions[examCloned.currentIndex][name][i] = value;
    }
    if (name === "question" || name === "answer") {
      examCloned.questions[examCloned.currentIndex][name] = value;
    }

    if (name === "next") {
      setButtonStatus(true);
      if (examCloned.currentIndex < examCloned.questions.length - 1) {
        console.log("if is run......");
        examCloned.currentIndex = examCloned.currentIndex + 1;
        let nextValue = examCloned.questions[examCloned.currentIndex + 1];
        setExam(nextValue);
      } else {
        console.log("Else is run");
        examCloned.currentIndex = examCloned.currentIndex + 1;
        examCloned.questions.push({
          question: "",
          answer: "",
          options: ["", "", "", ""],
        });

        // console.log("Exam Clone", examCloned.questions);
      }
    }
    if (name === "prev") {
      setButtonStatus(false);
      if (examCloned.currentIndex === 0) {
        setExam(examCloned);
      } else {
        let prevValue = examCloned.questions[examCloned.currentIndex - 1];
        examCloned.currentIndex = examCloned.currentIndex - 1;
        setExam(prevValue);
      }
    }

    if (name === "update") {
      const updateExam = examCloned.questions.map((item, index) => {
        if (index === examCloned.currentIndex) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      });

      console.log("Update Exam is: " + JSON.stringify(updateExam));
      setExam(updateExam);
    }
    setExam(examCloned);
  };

  const clearData = (id) => {
    console.log("id is ", id);
    const copy = [...exam.questions];
    const upDateArray = copy.map((item, index) => {
      if (index === id) {
        return { question: "", answer: "", options: ["", "", "", ""] };
      } else {
        return item;
      }
    });

    setExam({ ...exam, questions: upDateArray });
  };

  const createExam = () => {
    const { currentIndex, ...rest } = exam;
    console.log(`rest`, rest);
    dispatch(createExamActions(rest));
  };
  return [exam, buttonStatus, onChange, clearData, createExam];
};

export default useCreateExam;
