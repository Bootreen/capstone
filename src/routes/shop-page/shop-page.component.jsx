import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowSpiciness } from '../../store/shop/shop.action.js';
import { getIsShowSpiciness } from '../../store/shop/shop.selector.js';
import { SpicinessToggle, ToggleLabel, ToggleCheckbox } from './shop-page.styles.jsx';

const Shop = () => {
  const isShowSpiciness = useSelector(getIsShowSpiciness);
  const dispatch = useDispatch();
  const spicinessToggleHandler = () => dispatch(setIsShowSpiciness(!isShowSpiciness));

  return (
    <Fragment>
      <SpicinessToggle>
        <ToggleLabel htmlFor='spiciness'>Show Spiciness</ToggleLabel>
        <ToggleCheckbox id='spiciness'
          type='checkbox'
          checked={isShowSpiciness}
          onChange={spicinessToggleHandler}
        />
      </SpicinessToggle>
      <Outlet/>
    </Fragment>
  )
};

export default Shop;