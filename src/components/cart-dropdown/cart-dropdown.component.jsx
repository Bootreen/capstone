import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCountAndTotal, selectCartItems } from '../../store/cart/cart.selector.js';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartList, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

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