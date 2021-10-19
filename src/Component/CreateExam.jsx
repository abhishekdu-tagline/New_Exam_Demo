import React, { useState } from "react";

const CreateExam = () => {
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
      notes: [],
      currentIndex: 0,
    } || {}
  );

  const [buttonStatus, setButtonStatus] = useState(true);
  const api = () => {
    const { currentIndex, ...rest } = exam;

    console.log(`rest`, rest);
  };

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
    api();
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

  console.log(`Final Exam Clone Data is`, exam);

  return (
    <div>
      <select name="subjectName" onChange={onChange()}>
        <option value="ReactJS">ReactJS</option>
        <option value="AngularJS">AngularJS</option>
      </select>
      <br /> <br />
      <label>Question Number : {exam.currentIndex + 1}</label>
      {Object.entries(exam.questions[exam.currentIndex]).map(
        ([key, val], i) => {
          console.log("Key and  Value is", [key, val]);
          return (
            <div key={i}>
              {Array.isArray(val) ? (
                val.map((op, i) => (
                  <React.Fragment key={i}>
                    <input
                      type="radio"
                      name="answer"
                      value={op}
                      onChange={onChange()}
                      checked={op === exam.questions[exam.currentIndex].answer}
                    />
                    <input
                      key={i}
                      type="text"
                      name={key}
                      value={op}
                      onChange={onChange(i)}
                      placeholder={i}
                    />
                  </React.Fragment>
                ))
              ) : (
                <input
                  type="text"
                  name={key}
                  value={val}
                  onChange={onChange()}
                  placeholder={key}
                />
              )}
            </div>
          );
        }
      )}
      <button name="prev" onClick={onChange()}>
        Prev
      </button>
      <button name="next" onClick={onChange()}>
        Next
      </button>
      <button
        name="clear"
        onClick={() => {
          clearData(exam.currentIndex);
        }}
      >
        clear
      </button>
      {buttonStatus ? (
        <button name="submit">Submit</button>
      ) : (
        <button name="update" onClick={onChange()}>
          Update
        </button>
      )}
    </div>
  );
};

export default CreateExam;
