import { SHOP_ACTIONS } from './shop.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const toggleIsShowSpiciness = () =>
  createAction(SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS);

export const fetchDatabaseStart = () =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_START);

export const fetchDatabaseFailed = error =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_FAILED, error);

export const fetchDatabaseSucsess = shopDatabase =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_SUCCESS, shopDatabase);