import { SHOP_ACTIONS, Products } from './shop.types';
import { ShopAction } from './shop.action';

export type ShopState = {
  readonly shopDatabase: Products;
  readonly isShowSpiciness: boolean;
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
  readonly error: Error | null
}

const INITIAL_STATE: ShopState = {
  shopDatabase: {} as Products,
  isShowSpiciness: false,
  isLoading: false,
  isLoaded: false,
  error: null
};

export const shopReducer = (state = INITIAL_STATE, action = {} as ShopAction): ShopState => {

  switch (action.type) {
    case SHOP_ACTIONS.FETCH_DATABASE_START:
      return {...state, isLoading: true};
    case SHOP_ACTIONS.FETCH_DATABASE_FAILED:
      return {...state, error: action.payload, isLoading: false};
    case SHOP_ACTIONS.FETCH_DATABASE_SUCCESS:
      return {...state, shopDatabase: action.payload, isLoading: false, isLoaded: true};
    case SHOP_ACTIONS.TOGGLE_SHOW_SPICINESS:
      return {...state, isShowSpiciness: !state.isShowSpiciness};
    default: return state;
  }
};