import { SHOP_ACTIONS } from './shop.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setShopDatabase = shopDatabase =>
  createAction(SHOP_ACTIONS.SET_SHOP_DB, shopDatabase);

export const toggleIsShowSpiciness = () =>
  createAction(SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS);

export const setIsLoaded = booleanValue =>
createAction(SHOP_ACTIONS.SET_IS_LOADED, booleanValue);

export const setIsLoading = booleanValue =>
createAction(SHOP_ACTIONS.SET_IS_LOADING, booleanValue);