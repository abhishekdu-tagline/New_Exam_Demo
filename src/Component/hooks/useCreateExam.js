import { useState } from "react";
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

  const [error, setError] = useState({});

  const [buttonStatus, setButtonStatus] = useState(true);
  const dispatch = useDispatch();

  const checkValidation = (myObj) => {
    let errorMessage = {};
    console.log("my Obj is", myObj);

    if (!myObj?.question) {
      errorMessage.question = "Enter Question........";
    }

    if (myObj?.options) {
      const optionErr = myObj.options.map((item) => {
        if (item === "") {
          return "Enter Options........";
        }
      });
      console.log("Option Arr", optionErr);
      errorMessage.options = optionErr;
    }

    if (!myObj?.answer) {
      errorMessage.answer = "please Select Answer.....";
    }

    console.log("Error Object  Message is", errorMessage);
    setError(errorMessage);
    return errorMessage;
  };

  const onChange = (e, i) => {
    console.log("function is called");
    console.log("i is", i);
    const { name, value } = e.target;
    const examCloned = { ...exam };

    console.log("name and value is", name, value);

    if (name === "subjectName") {
      console.log("condition is true");
      examCloned[name] = value;
    }

    if (name === "options") {
      console.log(`run`);
      examCloned.questions[examCloned.currentIndex][name][i] = value;
    }
    if (name === "question" || name === "answer") {
      examCloned.questions[examCloned.currentIndex][name] = value;
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

  ///// next Functnality Methods

  const nextQuestion = () => {
    const examCloned = { ...exam };
    // console.log("Current Index is", examCloned.currentIndex);
    if (examCloned.currentIndex < examCloned.questions.length - 1) {
      console.log("if is run......");
      const data =
        examCloned?.questions[examCloned.currentIndex]?.options.includes("");
      if (data) {
        let errMsg = checkValidation(
          examCloned?.questions[examCloned.currentIndex]
        );
        console.log("error Message", errMsg);
      } else {
        setButtonStatus(true);
        examCloned.currentIndex = examCloned.currentIndex + 1;
        let nextValue = examCloned.questions[examCloned.currentIndex + 1];
        setExam(nextValue);
        setError({});
      }
    } else if (examCloned.currentIndex === examCloned.questions.length - 1) {
      console.log("Else if is run");
      const data =
        examCloned?.questions[examCloned.currentIndex]?.options.includes("");
      if (data) {
        let errMsg = checkValidation(
          examCloned?.questions[examCloned.currentIndex]
        );
        console.log("error Message", errMsg);
      } else {
        console.log("Error Object length is");
        examCloned.currentIndex = examCloned.currentIndex + 1;
        console.log("current Index is", examCloned.currentIndex);
        examCloned.questions.push({
          question: "",
          answer: "",
          options: ["", "", "", ""],
        });

        setError({});
      }
    }
    setExam(examCloned);
  };

  const prevQuestion = () => {
    const examCloned = { ...exam };
    setButtonStatus(false);
    if (examCloned.currentIndex === 0) {
      console.log(`if is run`);
      setExam(examCloned);
    } else {
      console.log(`else is run...`);
      let prevValue = examCloned.questions[examCloned.currentIndex - 1];
      examCloned.currentIndex = examCloned.currentIndex - 1;
      console.log(`prev Value is`, prevValue);
      setExam(examCloned);
      setError({});
    }
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

  const createExam = (baseUrl) => {
    const { currentIndex, ...rest } = exam;
    console.log(`rest`, rest);
    dispatch(createExamActions(baseUrl, rest));
  };
  return [
    exam,
    buttonStatus,
    error,
    onChange,
    clearData,
    createExam,
    nextQuestion,
    prevQuestion,
  ];
};

export default useCreateExam;
