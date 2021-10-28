import { ConfirmPassword, newPassword, Password } from "./constaint";

export default function fromValidation(name, values) {
  const err = {};
  switch (name) {
    case Password:
      if (!values.Password) {
        err.Password = "Enter Password......";
      }
      if (values.Password.length < 8) {
        err.Password = "Password Must be 8 Character";
      }
      return err;

    case ConfirmPassword:
      if (!values.ConfirmPassword) {
        err.ConfirmPassword = "Enter Confirm Password......";
      }
      if (values.Password.length < 8) {
        err.ConfirmPassword = "Password Must be 8 Character";
      }
      if (values.Password !== values.ConfirmPassword) {
        err.ConfirmPassword =
          "Confirm PassWord is not match entered password ...";
      }

      return err;

    case newPassword:
      if (!values.Password) {
        err.Password = "Enter The Password";
      } else if (values.Password.length < 8) {
        err.Password = "Password Must be 8 Character";
      }

      if (!values.ConfirmPassword) {
        err.ConfirmPassword = "Enter ConfirmPassword......";
      }

      return err;

    default:
  }
}
