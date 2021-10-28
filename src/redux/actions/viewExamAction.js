import { apiCall, getRequest } from "../../apis/apiCall";
import { VIEW_EXAM } from "../constaints/constaints";

export const viewExams = (config) => {
  return async (dispatch) => {
    try {
      const exams = await apiCall(config);
      console.log("Fetch Exams from server", exams);

      if (exams.data.statusCode === 200) {
        console.log("action successful");
        dispatch({
          type: VIEW_EXAM,
          payload: exams.data.data,
        });
      }
    } catch (err) {
      console.log("Fetchig Error", err);
    }
  };
};
