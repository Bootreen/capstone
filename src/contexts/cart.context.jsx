import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils.js';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decItemInCart: () => {},
  removeItemFromCart: () => {},
  cartCounter: 0,
  cartTotal: 0
});

export const CART_ACTIONS = {
  OPEN_CLOSE: 'OPEN_CLOSE',
  UPDATE: 'UPDATE'
};

const cartReducer = (state, { type, payload }) => {
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
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCounter: 0,
  cartTotal: 0
};

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCounter, cartTotal } = state;

  const setIsCartOpen = (booleanValue) =>
    dispatch(createAction(CART_ACTIONS.OPEN_CLOSE, booleanValue));

  const cartUpdate = (newCartItems) => {
    const { newCartCounter, newCartTotal } = cartRecount(newCartItems);
    dispatch(createAction(CART_ACTIONS.UPDATE, {
      cartItems: newCartItems,
      cartCounter: newCartCounter,
      cartTotal: newCartTotal
    }));
  };

  const addItemToCart = (productToAdd) =>
    cartUpdate(addCartItem(cartItems, productToAdd));

  const decItemInCart = (productToDecrease) =>
  productToDecrease.quantity === 0
    ? null
    : cartUpdate(decreaseCartItem(cartItems, productToDecrease));

  const removeItemFromCart = (productToRemove) =>
    cartUpdate(removeCartItem(cartItems, productToRemove));

  const cartRecount = (cartItems) => {
    const recountedCart = cartItems
      .reduce((total, item) =>
        {return {
          newCartCounter: total.newCartCounter + item.quantity,
          newCartTotal: total.newCartTotal + item.quantity * item.price
        }},
        { newCartCounter: 0, newCartTotal: 0 }
      );
    return recountedCart;
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    decItemInCart,
    removeItemFromCart,
    cartCounter,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};