import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';
import {
  MenuBarContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './menu-bar.styles.jsx';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

const MenuBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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