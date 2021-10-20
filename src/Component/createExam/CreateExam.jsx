import React, { useState } from "react";
import useCreateExam from "../hooks/useCreateExam";

const CreateExam = () => {
  console.log("Create Exam Rendering");
  const [exam, buttonStatus, onChange, clearData] = useCreateExam();

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
