import { CART_ACTIONS } from './cart.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setIsCartOpen = (booleanValue) =>
  createAction(CART_ACTIONS.OPEN_CLOSE, booleanValue);

export const addItemToCart = (itemToAdd) =>
  createAction(CART_ACTIONS.ADD_ITEM, itemToAdd);

export const decItemInCart = (itemToDecrease) =>
  createAction(CART_ACTIONS.DEC_ITEM, itemToDecrease);

export const removeItemFromCart = (itemToRemove) =>
  createAction(CART_ACTIONS.REMOVE_ITEM, itemToRemove);