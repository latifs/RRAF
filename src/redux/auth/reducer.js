import {
  AUTH_USER_STARTED,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  SIGN_OUT_USER,
} from './actionTypes';

const INIT_STATE = {
  isAuthenticated: false,
  user: {},
  error: '',
  isLoading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_USER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        isLoading: false,
        error: null,
      };
    case AUTH_USER_FAILURE:
      return {
        ...INIT_STATE,
        error: action.payload,
      };
    case SIGN_OUT_USER:
      return INIT_STATE;
    default:
      return {
        ...state,
      };
  }
};
