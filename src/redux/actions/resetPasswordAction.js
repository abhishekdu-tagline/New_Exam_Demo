import axios from "axios";
import { postRequest, resetPassword } from "../../apis/apiCall";

export const resetPasswordAction = (passwordData, history) => {
  console.log("Action is called");
  const token = localStorage.getItem("jwt");
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    "access-token": token,
  };
  return async () => {
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/ResetPassword",
        passwordData,
        { headers: headers }
      );
      console.log("Reset Password API response is", res);
      if (res.data.statusCode === 200) {
        alert("Reset Password Successful");
        history.push("/");
      }
    } catch (err) {
      console.log("API calling Error", err);
    }
  };
};
