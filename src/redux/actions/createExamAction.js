import { postRequest } from "../../apis/apiCall";
import {
  CREATE_EXAM_FAILED,
  CREATE_EXAM_PENDING,
  CREATE_EXAM_SUCCESS,
} from "../constaints/constaints";
const token = localStorage.getItem("jwt");
console.log(token);

const examHeaders = {
  "Content-Type": "application/json",
  "access-token": token,
};

export const createExamActions = (baseUrl, examObj) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_EXAM_PENDING,
    });
    try {
      const result = await postRequest(baseUrl, examObj, examHeaders);
      console.log(`result is`, result);
      if (result.data.statusCode === 200) {
        localStorage.setItem("createExam", result.data.data);
        dispatch({
          type: CREATE_EXAM_SUCCESS,
          payload: examObj,
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_EXAM_FAILED,
        payload: err,
      });
      console.log("Error in Create exam API", err);
    }
  };
};
