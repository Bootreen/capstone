import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { CartIconContainer, ItemCount, ShoppingCartIcon } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCounter } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{cartCounter}</ItemCount>
    </CartIconContainer>
  )
};

export default CartIcon;