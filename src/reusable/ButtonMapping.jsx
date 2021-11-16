import React from "react";
import Button from "./Button";

const ButtonMapping = ({ buttonAttributes, id }) => {
  return Array.isArray(buttonAttributes) ? (
    <>
      {buttonAttributes.map(({ value, typeOf, onClick, ...rest }) => {
        switch (typeOf) {
          case "next":
          case "prev":
          case "clear":
          case "submit":
          case "submitAnswer":
          case "finishExam":
            return (
              <Button {...{ ...rest }} onClick={onClick}>
                {value}
              </Button>
            );

          case "delete":
          case "edit":
          case "viewExam":
            return (
              <Button {...{ ...rest }} onClick={() => onClick(id)}>
                {value}
              </Button>
            );
          default:
            return "";
        }
      })}
    </>
  ) : (
    <Button
      type={buttonAttributes.type}
      name={buttonAttributes.name}
      onClick={buttonAttributes.onClick}
    >
      {buttonAttributes.value}
    </Button>
  );
};

export default ButtonMapping;
