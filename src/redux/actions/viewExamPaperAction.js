import { getRequest } from "../../apis/apiCall";
import { VIEW_EXAM_PAPER } from "../constaints/constaints";

export const showExamPaper = (id, history) => {
  const baseUrl = `https://nodejsexamination.herokuapp.com/student/examPaper?id=${id}`;
  return async (dispatch) => {
    try {
      const res = await getRequest(baseUrl);
      console.log("Display Exam Pepar Response is", res.data.data);
      if (res.data.statusCode === 200) {
        localStorage.setItem("exam", JSON.stringify(res.data.data));
        dispatch({
          type: VIEW_EXAM_PAPER,
          payload: res.data.data,
        });
        history.push(`/view_exam/${id}`);
      }

      if (res.data.statusCode === 500) {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("API Calling Error is : -", err);
    }
  };
};
