import { USER_ACTIONS } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTIONS.SIGN_OUT_SUCCESS:
      return INITIAL_STATE;
    case USER_ACTIONS.SIGN_UP_FAILED:
    case USER_ACTIONS.SIGN_IN_FAILED:
    case USER_ACTIONS.SIGN_OUT_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};