import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import { CartContext } from '../../contexts/cart.context.jsx';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';
import {
  MenuBarContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './menu-bar.styles.jsx';

const MenuBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <MenuBarContainer>
        <LogoContainer to='/'>
          <TCatLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser
            ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
            : (<NavLink to='/auth'>SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </MenuBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default MenuBar;