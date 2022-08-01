import { USER_ACTIONS } from './user.types.js';
import { createAction } from '../../utils/reducer/reducer.utils';

export const checkUserSession = () => createAction(USER_ACTIONS.CHECK_USER_SESSION);

export const signInEmailStart = (email, password) =>
  createAction(USER_ACTIONS.SIGN_IN_EMAIL_START, { email, password });

export const signInGoogleStart = () => createAction(USER_ACTIONS.SIGN_IN_GOOGLE_START);

export const signInSuccess = user => createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user);

export const signInFailed = error => createAction(USER_ACTIONS.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTIONS.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTIONS.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = error => createAction(USER_ACTIONS.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(USER_ACTIONS.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTIONS.SIGN_OUT_SUCCESS);

export const signOutFailed = error => createAction(USER_ACTIONS.SIGN_OUT_FAILED, error);