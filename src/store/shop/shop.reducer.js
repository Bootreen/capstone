import { SHOP_ACTIONS } from './shop.types.js';

const INITIAL_STATE = {
  shopDatabase: [],
  isShowSpiciness: false,
  isLoading: false,
  isLoaded: false,
  error: null
};

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTIONS.FETCH_DATABASE_START:
      return {...state, isLoading: true};
    case SHOP_ACTIONS.FETCH_DATABASE_FAILED:
      return {...state, error: payload, isLoading: false};
    case SHOP_ACTIONS.FETCH_DATABASE_SUCCESS:
      return {...state, shopDatabase: payload, isLoading: false, isLoaded: true};
    case SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS:
      return {...state, isShowSpiciness: !state.isShowSpiciness};
    default: return state;
  }
};