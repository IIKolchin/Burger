import {
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  SET_REGISTER,

} from "../actions/register";

const registerInitialState = {
  form: {
    email: "",
    name: "",
    password: "",
  },

  registerRequest: false,
  registerFailed: false,
};

export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerFailed: false,
        form: action.payload,
        registerRequest: false,
      };
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
      };
    }
    case SET_REGISTER: {
        return {
            ...state,
            form: action.payload,
        }
    }
    default: {
      return state;
    }
  }
};
