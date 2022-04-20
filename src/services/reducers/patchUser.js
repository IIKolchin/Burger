import {
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  SET_PATCH_USER,
} from "../actions/patchUser";

const initialState = {
  form: {
    email: "",
    name: "",
    password: "",
  },
  userRequest: false,
  userFailed: false,
};

export const patchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATCH_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        userFailed: false,
        userRequest: false,
        form: {...state.form, ...action.form}
      };
    }
    case PATCH_USER_FAILED: {
      return {
        ...state,
        userFailed: true,
        userRequest: false,
      };
    }
    case SET_PATCH_USER: {
      return {
        ...state,
        form: {...state.form, ...action.payload}
      };
    }

    default: {
      return state;
    }
  }
};
