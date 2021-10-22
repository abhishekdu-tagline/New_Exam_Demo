import { combineReducers } from "redux";
import authReducer from "./authReducer";
import createExamReducer from "./createExamReducer";
import examPaperReducer from "./examPaperReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  authReducer,
  createExamReducer,
  studentReducer,
  examPaperReducer,
});
