import React from "react";
import RadioButton from "./RadioButton";

import TextFiled from "./TextFiled";

const Form = ({ formData, formId, onChange, error }) => {
  console.log("FormData is", formData);
  console.log("form Id", formId);

  switch (formId) {
    case "createExam":
      return Object.entries(formData).map(([key, val], index) => {
        return (
          <div key={index}>
            {Array.isArray(val) ? (
              val.map((op, i) => (
                <React.Fragment key={i}>
                  <RadioButton
                    name="answer"
                    value={op}
                    onChange={onChange()}
                    checked={op === formData?.answer}
                  />
                  <TextFiled
                    name="options"
                    onChange={onChange(i)}
                    error={error}
                    val={op}
                  />
                  {key === "options"
                    ? error.options && <p>{error.options[i]}</p>
                    : ""}

                  <br />
                </React.Fragment>
              ))
            ) : (
              <TextFiled
                name={key}
                onChange={onChange()}
                error={error}
                val={val}
              />
            )}
            {key === "question"
              ? error.question && <p>{error.question}</p>
              : ""}
            {key === "answer" ? error.answer && <p>{error.answer}</p> : ""}
          </div>
        );
      });

    case "giveExam":
      return formData.currentIndexData.map((item, index) => {
        return (
          <>
            <div key={index}>
              {item.question}
              <br /> <br />
              {item.options.map((opt, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      type="radio"
                      name="answer"
                      value={opt}
                      checked={opt === formData.selectAnswer}
                      onChange={(e) => {
                        onChange(e, item._id);
                      }}
                    />
                    <span>{opt}</span> <br />
                  </React.Fragment>
                );
              })}
            </div>
          </>
        );
      });

    case "logIn":
    case "signUp":
    case "resetPassword":
      console.log("case is true");
      return Object.entries(formData).map(([key, val], index) => {
        return (
          <React.Fragment key={index}>
            <TextFiled name={key} onChange={onChange} error={error} /> <br />
            {key === "name" ? error.name && <p>{error.name}</p> : ""}
            {key === "email" ? error.email && <p>{error.email}</p> : ""}
            {key === "password"
              ? error.password && <p>{error.password}</p>
              : ""}
            {key === "role" ? error.role && <p>{error.role}</p> : ""}
            {key === "oldPassword"
              ? error.oldPassword && <p>{error.oldPassword}</p>
              : ""}
            {key === "Password"
              ? error.Password && <p>{error.Password}</p>
              : ""}
            {key === "ConfirmPassword"
              ? error.ConfirmPassword && <p>{error.ConfirmPassword}</p>
              : ""}
            <br />
          </React.Fragment>
        );
      });

    default:
      return "";
  }
};

export default Form;
