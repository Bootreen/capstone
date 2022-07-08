import { createContext, useReducer } from 'react';

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
  const { cartItems, cartCounter, cartTotal } = payload;

  switch (type) {
    case CART_ACTIONS.OPEN_CLOSE:
      return {
        ...state,
        isCartOpen: payload
      };
    case CART_ACTIONS.UPDATE:
      return {
        ...state,
        cartItems: cartItems,
        cartCounter: cartCounter,
        cartTotal: cartTotal
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

  const cartDispatcher = (type, payload) => dispatch({ type: type, payload: payload });

  const setIsCartOpen = (booleanValue) =>
    cartDispatcher(CART_ACTIONS.OPEN_CLOSE, booleanValue);

  const cartUpdate = (newCartItems) => {
    const { cartCounter, cartTotal } = cartRecount(newCartItems);
    const payload = {
      cartItems: newCartItems,
      cartCounter: cartCounter,
      cartTotal: cartTotal
    };
    cartDispatcher(CART_ACTIONS.UPDATE, payload);
  };

  const addItemToCart = (productToAdd) =>
    cartUpdate(addCartItem(cartItems, productToAdd));

  const decItemInCart = (productToDecrease) =>
  productToDecrease.quantity === 1
    ? cartUpdate(removeCartItem(cartItems, productToDecrease))
    : cartUpdate(decreaseCartItem(cartItems, productToDecrease));

  const removeItemFromCart = (productToRemove) =>
    cartUpdate(removeCartItem(cartItems, productToRemove));

  const cartRecount = (cartItems) => {
    const recountedCart = cartItems
      .reduce((total, item) =>
        {return {
          cartCounter: total.cartCounter + item.quantity,
          cartTotal: total.cartTotal + item.quantity * item.price
        }},
        { cartCounter: 0, cartTotal: 0 }
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