import { email, name, password, role } from "../../utils/validationConstaint";

export const formAttributes = {
  name: {
    type: "text",
    isRequired: true,
    pattern: name,
    autoComplete: "name",
  },
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
  role: {
    type: "text",
    isRequired: true,
    pattern: role,
    autoComplete: "role",
  },
};
