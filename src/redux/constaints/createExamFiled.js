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
    errorMessage: "Only Alphabets",
    pattern: subjectName,
    autoComplete: "subjectName",
  },
  question: {
    type: "text",
    isRequired: true,
    errorMessage: "Only Alphabets",
    pattern: question,
    autoComplete: "question",
  },
  options: {
    type: "text",
    isRequired: true,
    errorMessage: "Only Alphabets",
    pattern: options,
    autoComplete: "options",
  },
  answer: {
    type: "radio",
    isRequired: true,
    errorMessage: "Answer required",
    pattern: answer,
    autoComplete: "answer ",
  },
};
