import axios from "axios";
import {
  LOGIN,
  SIGNUP_FAILED,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
} from "../constaints/constaints";
const headers = {
  "Content-Type": "application/json",
};

export const signupAction = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_PENDING });
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/SignUp/",
        data,
        {
          headers: headers,
        }
      );
      console.log("data is added", res);
      if (res.statusCode === 200) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data.message,
        });
        history.push(`/`);
      }
    } catch (err) {
      dispatch({
        type: SIGNUP_FAILED,
        payload: err,
      });
      alert("Signup failed password contain only numbers");
      console.log("Sign Up API is not called because of error", err);
    }
  };
};

export const loginAction = (data, history) => {
  console.log("login Action is called and Data is", data, history);
  return async (dispatch) => {
    try {
      const userRes = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/Login",
        data,
        {
          headers: headers,
        }
      );
      console.log("Response is UserLogin", userRes);
      if (userRes.data.statusCode === 200) {
        localStorage.setItem("user", userRes.data.data.role);
        localStorage.setItem("jwt", userRes.data.data.token);
        dispatch({
          type: LOGIN,
          payload: userRes.data.data,
        });
        if (userRes.data.data.role === "teacher") {
          alert("Login successful");
          history.push("/create_exam");
        } else {
          history.push("/student_exam");
        }
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.log("Error in API calling ", err);
    }
  };
};

export const forgotPassword = (email) => {
  return async () => {
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/ForgotPassword",
        email,
        {
          headers: headers,
        }
      );
      console.log("Forgot PassWord API response", res);
    } catch (err) {
      console.log("Forgot Password Failed", err);
    }
  };
};

export const setNewPasswordAction = (data, searchToken, history) => {
  console.log("set New Password Action is called");
  return async () => {
    try {
      const res = await axios.post(
        `https://nodejsexamination.herokuapp.com/users/ForgotPassword/Verify${searchToken}`,
        data,
        {
          headers: headers,
        }
      );
      if (res.data.statusCode === 200) {
        alert("ForgotPassword successful");
        history.push("/");
      } else {
        alert("Invalid Email");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
};

export const resetPassword = (newPassword) => {
  return async () => {
    try {
      const res = await axios.post();
    } catch (err) {}
  };
};
