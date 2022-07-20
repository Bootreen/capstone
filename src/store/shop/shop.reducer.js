import { SHOP_ACTIONS } from './shop.types.js';

const INITIAL_STATE = {
  categories: [],
  products: [],
  isShowSpiciness: false
};

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTIONS.SET_CATEGORIES:
      return {...state, categories: payload};
    case SHOP_ACTIONS.SET_PRODUCTS:
      return {...state, products: payload};
    case SHOP_ACTIONS.SET_IS_SHOW_SPICINESS:
      return {...state, isShowSpiciness: payload};
    default: return state;
  }
};