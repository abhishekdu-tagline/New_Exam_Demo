import React from "react";
import { objectKeys, objectValues } from "../utils/regex";
import TextFiled from "../reusable/TextFiled";
import RadioButton from "./RadioButton";
import DropDownMenu from "./DropDownMenu";
import ButtonMapping from "./ButtonMapping";
import Label from "./Label";

const Form = ({
  formAttributes,
  onChange,
  buttonAttributes,
  error,
  ...otherPros
}) => {
  // console.log(`other props is`, otherPros);
  // console.log(`login form attributes: ${formAttributes}`);
  return (
    <form>
      {objectValues(formAttributes).map(({ ...item }, index) => {
        const { pattern } = item;
        let name = objectKeys(formAttributes)[index];
        switch (pattern) {
          case "subjectName":
            return (
              <DropDownMenu {...{ ...otherPros, name, onChange, error }} />
            );

          case "name":
          case "email":
          case "role":
          case "password":
          case "oldPassword":
          case "Password":
          case "ConfirmPassword":
          case "question":
            return (
              <TextFiled
                key={index}
                {...{ ...item, name, onChange, error }}
                value={otherPros.textValue}
                placeholder={`Enter ${name}`}
              />
            );

          case "giveAnswer":
            return (
              <>
                {otherPros.currentQuestion.map((qus, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Label labelValue={qus?.question} />
                      {qus?.options?.map((option, index) => {
                        return (
                          <div key={index}>
                            <RadioButton
                              name="answer"
                              onChange={(e) => {
                                onChange(e, qus?._id);
                              }}
                              value={option}
                              isSelected={option === otherPros?.selectedAnswer}
                            />
                            <Label labelValue={option} />
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </>
            );

          case "options":
            return (
              <>
                {Object.entries(otherPros.currentQuestion).map(
                  ([key, value]) => {
                    console.log(`error`, error);
                    return (
                      <>
                        {Array.isArray(value) &&
                          value.map((op, i) => (
                            <React.Fragment key={index}>
                              <RadioButton
                                name="answer"
                                onChange={onChange}
                                value={op}
                                isSelected={
                                  op === otherPros.currentQuestion.answer
                                }
                              />
                              <TextFiled
                                key={index}
                                {...{ ...item, name }}
                                onChange={(e) => {
                                  onChange(e, i);
                                }}
                                error={error?.options?.[i]}
                                value={op}
                                placeholder={`Enter ${name}`}
                              />
                            </React.Fragment>
                          ))}
                      </>
                    );
                  }
                )}
              </>
            );

          case "answer":
            return <Label labelValue={otherPros.currentAnswer} />;
          default:
            return "";
        }
      })}
      <ButtonMapping buttonAttributes={buttonAttributes} />
      {/* <Button buttonData={buttonAttributes} /> */}
    </form>
  );
};

export default Form;
