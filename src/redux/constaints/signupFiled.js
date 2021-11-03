import { email, name, password, role } from "../../utils/validationConstaint";

export const formAttributes = {
  name: {
    type: "text",
    isRequired: true,
    errorMessage: "Only Alphabets",
    pattern: name,
    autoComplete: "name",
  },
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
  role: {
    type: "text",
    isRequired: true,
    errorMessage: "Role is required",
    pattern: role,
    autoComplete: "role",
  },
};
