import { USER_ACTIONS } from './user.types.js';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);