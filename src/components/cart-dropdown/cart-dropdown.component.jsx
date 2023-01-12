import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCountAndTotal, selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartList, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCountAndTotal).cartCount;
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <CartList>
      <CartItems>
        {cartCount > 0 ?
          (cartItems.map(item => <CartItem key={item.barcode} cartItem={item} />))
          : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      {cartCount > 0 && (<Button type='button' onClick={goToCheckoutHandler}>To Checkout</Button>)}
    </CartList>
  )
};

export default CartDropdown;