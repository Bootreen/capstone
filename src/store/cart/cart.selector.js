import { createSelector } from 'reselect';

const selectCartSlice = state => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartSlice],
  cart => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartSlice],
  cart => cart.cartItems
);

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