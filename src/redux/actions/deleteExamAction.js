import { deleteRequest } from "../../apis/apiCall";
import { DELETE_EXAM } from "../constaints/constaints";

export const deleteExams = (id, history) => {
  console.log("selected deleted id is " + id);
  const deleteUrl = `https://nodejsexamination.herokuapp.com/dashboard/Teachers/deleteExam?id=${id}`;
  return async (dispatch) => {
    try {
      const deleteResponse = await deleteRequest(deleteUrl, id);
      console.log("Delete Response is", deleteResponse);
      if (deleteResponse.data.statusCode === 200) {
        dispatch({
          type: DELETE_EXAM,
          payload: id,
        });
        alert("Delete Successful");
        history.push("/view_exam");
      }
    } catch (err) {
      console.log("Delete API is not called", err);
    }
  };
};
