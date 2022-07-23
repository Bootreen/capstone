import { createSelector } from 'reselect';

export const selectIsCartOpen = state => state.cart.isCartOpen;

export const selectCartItems = state => state.cart.cartItems;

export const selectCartCountAndTotal = createSelector(
  [selectCartItems],
  cartItems => {
    const cartCountAndTotal = cartItems
      .reduce((total, item) =>
        {return {
          cartCount: total.cartCount + item.quantity,
          cartTotal: total.cartTotal + item.quantity * item.price
        }},
        { cartCount: 0, cartTotal: 0 }
      );
    return cartCountAndTotal;
  }
);