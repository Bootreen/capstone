import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const updatedCartItems = cartItems;

  for (let index = 0; index < updatedCartItems.length; index++)
    if (updatedCartItems[index]['item'] === productToAdd) {
      updatedCartItems[index]['quantity']++;
      return updatedCartItems;
    }

  updatedCartItems.push({
    item: productToAdd,
    quantity: 1
  })

  return updatedCartItems;
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