export default function valid(name, value, data) {
  console.log("Validation is called", name, value);
  switch (name) {
    case "name":
      if (!value || value.trim() === "") {
        return "First name is required";
      } else {
        return "";
      }

    case "email":
      if (!value || value.trim() === "") {
        return "Email is required";
      } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        return "Enter a valid email address";
      } else {
        return "";
      }

    case "password":
      if (!value || value.trim() === "") {
        return "Password is required";
      } else {
        return "";
      }

    case "role":
      if (!value || value.trim() === "") {
        return "User Role is required";
      } else {
        return "";
      }

    case "Password":
      console.log("Run...");
      if (!value || value.trim() === "") {
        return "Password is required";
      } else {
        return "";
      }

    case "ConfirmPassword":
      if (!value) {
        return "Confirm Password Required";
      } else if (value !== data?.Password) {
        return "New Password and Confirm Password Must be Same";
      } else {
        return "";
      }

    default:
      return "";
  }
}
