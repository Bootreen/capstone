import { SHOP_ACTIONS, Products } from './shop.types';
import { createAction, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';

export type ToggleIsShowSpiciness = Action<SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS>;
export type FetchDatabaseStart = Action<SHOP_ACTIONS.FETCH_DATABASE_START>;
export type FetchDatabaseError = ActionWithPayload<SHOP_ACTIONS.FETCH_DATABASE_FAILED, Error>;
export type FetchDatabaseSuccess = ActionWithPayload<SHOP_ACTIONS.FETCH_DATABASE_SUCCESS, Products>;

export type ShopAction =
  | ToggleIsShowSpiciness
  | FetchDatabaseStart
  | FetchDatabaseError
  | FetchDatabaseSuccess;

export const toggleIsShowSpiciness = (): ToggleIsShowSpiciness =>
  createAction(SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS);

export const fetchDatabaseStart = (): FetchDatabaseStart =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_START);

export const fetchDatabaseFailed = (error: Error): FetchDatabaseError =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_FAILED, error);

export const fetchDatabaseSuccess = (shopDatabase: Products): FetchDatabaseSuccess =>
  createAction(SHOP_ACTIONS.FETCH_DATABASE_SUCCESS, shopDatabase);