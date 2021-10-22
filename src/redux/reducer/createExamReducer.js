import {
  CREATE_EXAM_FAILED,
  CREATE_EXAM_PENDING,
  CREATE_EXAM_SUCCESS,
  DELETE_EXAM,
  UPDATE_EXAM,
  VIEW_EXAM,
} from "../constaints/constaints";

const initialState = {
  createExam: {
    loading: false,
    error: false,
    message: null,
  },

  viewExam: [],
};

export default function createExamReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EXAM_PENDING:
      return {
        ...state,
        createExam: { loading: true, error: false, message: null },
      };

    case CREATE_EXAM_SUCCESS:
      return {
        ...state,
        createExam: { loading: false, error: false, message: action.payload },
      };

    case CREATE_EXAM_FAILED:
      return {
        ...state,
        createExam: { loading: false, error: true, message: action.payload },
      };

    case VIEW_EXAM:
      return {
        ...state,
        viewExam: action.payload,
      };
    case DELETE_EXAM:
      const updatedExam = state.viewExam.filter((item) => {
        console.log("item");
        return item._id !== action.payload;
      });
      return { ...state, viewExam: updatedExam };

    case UPDATE_EXAM:
      const updateExam = state.viewExam.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, SubjectName: action.data };
        } else {
          return item;
        }
      });
      return { ...state, viewExam: updateExam };
    default:
      return state;
  }
}
