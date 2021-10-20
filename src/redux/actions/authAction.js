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
