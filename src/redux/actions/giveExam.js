import { giveExam } from "../../apis/apiCall";

export const giveExamActions = (baseUrl, examArray) => {
  return async (dispatch) => {
    try {
      const examRes = await giveExam(baseUrl, examArray);
      console.log("Exam res is Successful", examRes);
    } catch (err) {
      console.log("Error in API call", err);
    }
  };
};
