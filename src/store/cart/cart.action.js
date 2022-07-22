import { CART_ACTIONS } from './cart.types.js';
import { createAction } from '../../utils/reducer/reducer.utils.js';

export const setIsCartOpen = (booleanValue) =>
  createAction(CART_ACTIONS.OPEN_CLOSE, booleanValue);

export const cartUpdate = (combinedPayload) =>
  createAction(CART_ACTIONS.UPDATE, combinedPayload);