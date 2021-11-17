import { giveAnswer } from "../../utils/validationConstaint";

export const formAttributes = {
  answer: {
    type: "radio",
    isRequired: true,
    pattern: giveAnswer,
    autoComplete: "answer ",
  },
};
