import { putRequest } from "../../apis/apiCall";
import { UPDATE_EXAM } from "../constaints/constaints";

export const updateExam = (data, id, history) => {
  const baseUrl = `https://nodejsexamination.herokuapp.com/dashboard/Teachers/editExam?id=${id}`;
  return async (dispatch) => {
    try {
      const res = await putRequest(baseUrl, data);

      console.log("update API Response is :-", res);
      if (res.data.statusCode === 200) {
        dispatch({
          type: UPDATE_EXAM,
          data: data,
          id: id,
        });
        history.push("/view_exam");
      }
    } catch (err) {
      console.log("update API Error is", err);
    }
  };
};
