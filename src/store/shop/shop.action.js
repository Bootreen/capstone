import { SHOP_ACTIONS } from './shop.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setCategories = (categories) =>
  createAction(SHOP_ACTIONS.SET_CATEGORIES, categories);

export const setProducts = (products) =>
  createAction(SHOP_ACTIONS.SET_PRODUCTS, products);

export const setIsShowSpiciness = (booleanValue) =>
  createAction(SHOP_ACTIONS.SET_IS_SHOW_SPICINESS, booleanValue);