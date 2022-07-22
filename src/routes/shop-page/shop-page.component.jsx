import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsShowSpiciness } from '../../store/shop/shop.action.js';
import {
  selectIsLoaded,
  selectIsLoading,
  selectIsShowSpiciness
} from '../../store/shop/shop.selector.js';
import {
  SpicinessToggle,
  ToggleLabel,
  ToggleCheckbox
} from './shop-page.styles.jsx';

const Shop = () => {
  const isShowSpiciness = useSelector(selectIsShowSpiciness);
  const isLoading = useSelector(selectIsLoading);
  const isLoaded = useSelector(selectIsLoaded);
  const dispatch = useDispatch();
  const spicinessToggleHandler = () => dispatch(toggleIsShowSpiciness());

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
      {isLoading && <span>Loading database...</span>}
      {isLoaded && <Outlet/>}
    </Fragment>
  )
};

export default Shop;