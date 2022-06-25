import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, cartCounter } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartCounter > 0 ?
          (cartItems.map(item => <CartItem key={item.barcode} cartItem={item} />))
          : (<span className='empty-message'>Your cart is empty</span>)
        }
      </div>
      {cartCounter > 0 && (<Link className='nav-link' to='/checkout'>
        <Button type='button' buttonVariation='navigation'>
          To Checkout
        </Button>
      </Link>)}
    </div>
  )
};

export default CartDropdown;