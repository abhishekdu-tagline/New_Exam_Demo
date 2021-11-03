import { email, password } from "../../utils/validationConstaint";

export const formAttributes = {
  email: {
    type: "email",
    isRequired: true,
    errorMessage: "Email address is required",
    pattern: email,
    autoComplete: "email",
  },
  password: {
    type: "password",
    isRequired: true,
    errorMessage: "Atleast 8 character with one symbol,small,capital letter",
    pattern: password,
    autoComplete: "password",
  },
};
