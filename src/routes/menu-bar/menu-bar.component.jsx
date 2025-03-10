import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  MenuBarContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './menu-bar.styles';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const MenuBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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