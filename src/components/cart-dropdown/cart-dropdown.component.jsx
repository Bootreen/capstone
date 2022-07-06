import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartList, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems, cartCounter } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <CartList>
      <CartItems>
        {cartCounter > 0 ?
          (cartItems.map(item => <CartItem key={item.barcode} cartItem={item} />))
          : (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      {cartCounter > 0 && (<Button type='button' onClick={goToCheckoutHandler}>To Checkout</Button>)}
    </CartList>
  )
};

export default CartDropdown;