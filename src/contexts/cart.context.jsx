import { createContext, useState, useEffect } from 'react';

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const updatedCartCounter = cartItems
      .reduce((total, item) => total + item.quantity, 0);
    setCartCounter(updatedCartCounter);
  }, [cartItems]);

  useEffect(() => {
    const updatedCartTotal = cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0);
    setCartTotal(updatedCartTotal);
  }, [cartItems]);

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeCartItem(cartItems, productToRemove));

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const decItemInCart = (productToDecrease) => {
    productToDecrease.quantity === 1
      ? setCartItems(removeCartItem(cartItems, productToDecrease))
      : setCartItems(decreaseCartItem(cartItems, productToDecrease))
  };

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