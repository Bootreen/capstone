import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context.jsx';
import './shop.styles.scss';

const Shop = () => {
  const { isShowSpiciness, setIsShowSpiciness } = useContext(ProductsContext);
  const spicinessToggleHandler = () => setIsShowSpiciness(!isShowSpiciness);

  return (
    <Fragment>
      <div className='spiciness-toggle-input'>
        <label htmlFor='spiciness' className='spiciness-label'>Show Spiciness</label>
        <input id='spiciness' type='checkbox' className='spiciness-checkbox' onClick={spicinessToggleHandler}/>
      </div>
      <Outlet/>
    </Fragment>
  )
};

export default Shop;