import { CART_ACTIONS } from './cart.types';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: []
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.barcode === productToAdd.barcode
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.barcode === productToAdd.barcode
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) =>
  cartItems.filter(cartItem => cartItem.barcode !== productToRemove.barcode);

const decreaseCartItem = (cartItems, productToDecrease) => cartItems.map(
  cartItem =>
    cartItem.barcode === productToDecrease.barcode && productToDecrease.quantity !== 0
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
);

export const cartReducer = (state = INITIAL_STATE, { type, payload } = {}) => {
  const { cartItems } = state;
  switch (type) {
    case CART_ACTIONS.OPEN_CLOSE:
      return {
        ...state,
        isCartOpen: payload
      };
    case CART_ACTIONS.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(cartItems, payload)
      };
    case CART_ACTIONS.DEC_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(cartItems, payload)
      };
    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(cartItems, payload)
      };
    default:
      return state;
  }
}