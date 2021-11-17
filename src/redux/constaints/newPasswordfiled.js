import { ConfirmPassword, Password } from "../../utils/validationConstaint";

export const formAttributes = {
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
