import {
  LOGIN,
  SIGNUP_FAILED,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
} from "../constaints/constaints";

const intialState = {
  signUp: {
    loading: false,
    error: false,
    message: null,
  },
  loginUser: {
    loading: false,
    data: null,
    message: null,
  },
};

export default function authReducer(state = intialState, action) {
  switch (action.type) {
    case SIGNUP_PENDING:
      console.log("Signup pending");
      return {
        ...state,
        signUp: { loading: true, error: false, message: null },
      };

    case SIGNUP_SUCCESS:
      console.log("Signup successful call");
      return {
        ...state,
        signUp: { loading: false, error: false, message: action.payload },
      };
    case SIGNUP_FAILED:
      console.log("Signup failed call");
      return {
        ...state,
        signUp: { loading: false, error: true, message: action.payload },
      };

    case LOGIN:
      return {
        ...state,
        loginUser: {
          loading: true,
          data: action.payload,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
}
