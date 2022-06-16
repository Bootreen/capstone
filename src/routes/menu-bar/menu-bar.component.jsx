import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as TCatLogo } from '../../assets/tcat-logo.svg';
import { UserContext } from '../../contexts/user.context.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import './menu-bar.styles.scss';

const MenuBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }
  
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
            (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) :
            (<Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>)
          }          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default MenuBar;