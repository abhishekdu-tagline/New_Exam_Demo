import {
  ONCHANGE,
  STUDENT_PROFILE,
  UPDATE_PROFILE,
} from "../constaints/constaints";

const initialState = {
  studentProfile: {},
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case STUDENT_PROFILE:
      return { ...state, studentProfile: action.payload };

    case ONCHANGE:
      return {
        ...state,
        studentProfile: { ...state.studentProfile, name: action.payload },
      };

    case UPDATE_PROFILE:
      return { ...state, studentProfile: action.payload };
    default:
      return state;
  }
}
