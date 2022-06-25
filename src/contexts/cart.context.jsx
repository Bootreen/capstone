import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.barcode === productToAdd.barcode
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.barcode === productToAdd.barcode
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};