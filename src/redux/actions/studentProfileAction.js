import { getRequest, putRequest } from "../../apis/apiCall";
import {
  ONCHANGE,
  STUDENT_PROFILE,
  UPDATE_PROFILE,
} from "../constaints/constaints";

export const studentProfileAction = (baseUrl) => {
  return async (dispatch) => {
    try {
      const res = await getRequest(baseUrl);

      console.log("update API Response is :-", res);
      if (res.data.statusCode === 200) {
        dispatch({
          type: STUDENT_PROFILE,
          payload: res.data.data,
        });
      }
    } catch (err) {
      console.log("update API Error is", err);
    }
  };
};

export const onChangeStudent = (data) => {
  console.log("Data is", data);
  return {
    type: ONCHANGE,
    payload: data,
  };
};

export const updateStudentProfile = (putUrl, studentProfile) => {
  return async (dispatch) => {
    try {
      const res = await putRequest(putUrl, studentProfile);
      console.log("Student Update Profile API call successful", res);
      if (res.data.statusCode === 200) {
        if (res.data.message) {
          alert(res.data.message);
          dispatch({
            type: UPDATE_PROFILE,
            payload: studentProfile,
          });
        }
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("API call failed", err);
    }
  };
};
