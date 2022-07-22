import { CART_ACTIONS } from './cart.types';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCounter: 0,
  cartTotal: 0
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
    cartItem.barcode === productToDecrease.barcode
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
);

export const cartReducer = (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case CART_ACTIONS.OPEN_CLOSE:
      return {
        ...state,
        isCartOpen: payload
      };
    case CART_ACTIONS.UPDATE:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}