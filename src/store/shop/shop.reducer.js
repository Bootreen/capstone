import { SHOP_ACTIONS } from './shop.types.js';

const INITIAL_STATE = {
  shopDatabase: [],
  isShowSpiciness: false,
  isLoaded: false,
  isLoading: false
};

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTIONS.SET_IS_LOADED:
      return {...state, isLoaded: payload};
    case SHOP_ACTIONS.SET_IS_LOADING:
      return {...state, isLoading: payload};
    case SHOP_ACTIONS.SET_SHOP_DB:
      return {...state, shopDatabase: payload};
    case SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS:
      return {...state, isShowSpiciness: !state.isShowSpiciness};
    default: return state;
  }
};