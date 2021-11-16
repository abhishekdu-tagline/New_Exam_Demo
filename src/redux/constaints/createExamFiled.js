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

  // option2: {
  //   type: "text",
  //   isRequired: true,
  //   errorMessage: "Only Alphabets",
  //   pattern: option2,
  //   autoComplete: "option",
  // },
  // answer2: {
  //   type: "radio",
  //   isRequired: true,
  //   errorMessage: "Answer required",
  //   pattern: answer2,
  //   autoComplete: "answer ",
  // },
  // option3: {
  //   type: "text",
  //   isRequired: true,
  //   errorMessage: "Only Alphabets",
  //   pattern: option3,
  //   autoComplete: "options",
  // },
  // answer3: {
  //   type: "radio",
  //   isRequired: true,
  //   errorMessage: "Answer required",
  //   pattern: answer3,
  //   autoComplete: "answer ",
  // },
  // option4: {
  //   type: "text",
  //   isRequired: true,
  //   errorMessage: "Only Alphabets",
  //   pattern: option4,
  //   autoComplete: "options",
  // },
  // answer4: {
  //   type: "radio",
  //   isRequired: true,
  //   errorMessage: "Answer required",
  //   pattern: answer4,
  //   autoComplete: "answer ",
  // },
};
