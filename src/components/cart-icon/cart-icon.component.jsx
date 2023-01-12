import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCountAndTotal } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { CartIconContainer, ItemCount, ShoppingCartIcon } from './cart-icon.styles';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCountAndTotal).cartCount;
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingCartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
};

export default CartIcon;