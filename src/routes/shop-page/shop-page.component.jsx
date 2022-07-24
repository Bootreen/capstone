import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsShowSpiciness } from '../../store/shop/shop.action.js';
import {
  selectError,
  selectIsLoading,
  selectIsShowSpiciness
} from '../../store/shop/shop.selector.js';
import {
  SpicinessToggle,
  ToggleLabel,
  ToggleCheckbox
} from './shop-page.styles.jsx';
import Spinner from '../../components/spinner/spinner.component.jsx';

const Shop = () => {
  const isShowSpiciness = useSelector(selectIsShowSpiciness);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
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
      {isLoading && <Spinner/>}
      {error && <span>Error loading database: {error.message}</span>}
      {!isLoading && !error && <Outlet/>}
    </Fragment>
  )
};

export default Shop;