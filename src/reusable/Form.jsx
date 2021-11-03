import React from "react";
import { objectKeys, objectValues } from "../utils/regex";
import TextFiled from "../reusable/TextFiled";
import Button from "./Button";
import RadioButton from "./RadioButton";

const Form = ({ formAttributes, onChange, buttonAttributes }) => {
  // console.log(`login form attributes: ${formAttributes}`);
  return (
    <form>
      {objectValues(formAttributes).map(({ ...item }, index) => {
        console.log(`item is`, item);
        const { type } = item;

        let name = objectKeys(formAttributes)[index];

        switch (type) {
          case "text":
          case "email":
          case "password":
            return (
              <TextFiled
                key={index}
                {...{ ...item, name, onChange }}
                placeholder={`Enter ${name}`}
              />
            );

          case "radio":
            return <RadioButton />;

          default:
            return "";
        }
      })}
      <Button buttonData={buttonAttributes} />
    </form>
  );
};

export default Form;
