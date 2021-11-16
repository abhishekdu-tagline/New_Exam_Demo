import { ConfirmPassword, Password } from "../../utils/validationConstaint";

export const formAttributes = {
  Password: {
    type: "password",
    isRequired: true,
    errorMessage: "Atleast 8 character with one symbol,small,capital letter",
    pattern: Password,
    autoComplete: "password",
  },
  ConfirmPassword: {
    type: "password",
    isRequired: true,
    errorMessage: "Password and Confirm Password must be the same",
    pattern: ConfirmPassword,
    autoComplete: "password",
  },
};
