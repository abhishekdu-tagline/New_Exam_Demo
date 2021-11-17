import {
  answer,
  options,
  question,
  subjectName,
} from "../../utils/validationConstaint";

export const formAttributes = {
  subjectName: {
    type: "select",
    isRequired: true,
    pattern: subjectName,
    autoComplete: "subjectName",
  },
  question: {
    type: "text",
    isRequired: true,
    pattern: question,
    autoComplete: "question",
  },
  options: {
    type: "text",
    isRequired: true,
    pattern: options,
    autoComplete: "options",
  },
  answer: {
    type: "radio",
    isRequired: true,
    pattern: answer,
    autoComplete: "answer ",
  },
};
