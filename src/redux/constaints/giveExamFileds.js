import { giveAnswer } from "../../utils/validationConstaint";

export const formAttributes = {
  answer: {
    type: "radio",
    isRequired: true,
    errorMessage: "Answer required",
    pattern: giveAnswer,
    autoComplete: "answer ",
  },
};
