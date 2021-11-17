import { email, password } from "../../utils/validationConstaint";

export const formAttributes = {
  email: {
    type: "email",
    isRequired: true,
    pattern: email,
    autoComplete: "email",
  },
  password: {
    type: "password",
    isRequired: true,
    pattern: password,
    autoComplete: "password",
  },
};
