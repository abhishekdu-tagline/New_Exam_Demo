import {
  ConfirmPassword,
  oldPassword,
  Password,
} from "../../utils/validationConstaint";

export const formAttributes = {
  oldPassword: {
    type: "password",
    isRequired: true,
    pattern: oldPassword,
    autoComplete: "oldPassword",
  },
  Password: {
    type: "password",
    isRequired: true,
    pattern: Password,
    autoComplete: "Password",
  },
  ConfirmPassword: {
    type: "password",
    isRequired: true,
    pattern: ConfirmPassword,
    autoComplete: "ConfirmPassword",
  },
};
