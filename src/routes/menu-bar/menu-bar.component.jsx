import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';
import './menu-bar.styles.scss';

const MenuBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <TCatLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ?
            (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) :
            (<Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MenuBar;