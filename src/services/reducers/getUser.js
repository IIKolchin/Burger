import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../actions/getUser";

const userInitialState = {
  form: {
    email: "",
    name: "",
  },
  userRequest: false,
  userFailed: false,

  isUser: false,
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userFailed: false,
        userRequest: false,
        isUser: true,
        form: action.form
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,

        userFailed: true,
        userRequest: false,
        isUser: false,
      };
    }

    default: {
      return state;
    }
  }
};
