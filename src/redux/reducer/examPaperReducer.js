import { EXAM_LIST } from "../constaints/constaints";

const initialState = {
  examList: [],
};

export default function examPaperReducer(state = initialState, action) {
  switch (action.type) {
    case EXAM_LIST:
      return {
        ...state,
        examList: action.payload,
      };

    default:
      return state;
  }
}
