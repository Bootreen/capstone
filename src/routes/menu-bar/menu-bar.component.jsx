import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import './menu-bar.styles.scss';

const MenuBar = () => (
  <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <TCatLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/auth'>
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default MenuBar;