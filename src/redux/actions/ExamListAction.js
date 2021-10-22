import { getRequest } from "../../apis/apiCall";
import { EXAM_LIST } from "../constaints/constaints";

export const examListAction = (baseUrl) => {
  return async (dispatch) => {
    try {
      console.log("API is called");
      const res = await getRequest(baseUrl);

      if (res.data.statusCode === 200) {
        dispatch({
          type: EXAM_LIST,
          payload: res.data.data,
        });
      }
    } catch (err) {
      console.log("Student Exam API Error is :-", err);
    }
  };
};
