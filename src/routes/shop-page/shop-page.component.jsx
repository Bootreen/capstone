import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsShowSpiciness } from '../../store/shop/shop.action';
import {
  selectError,
  selectIsLoading,
  selectIsLoaded,
  selectIsShowSpiciness
} from '../../store/shop/shop.selector';
import {
  SpicinessToggle,
  ToggleLabel,
  ToggleCheckbox
} from './shop-page.styles';
import Spinner from '../../components/spinner/spinner.component';

const Shop = () => {
  const isShowSpiciness = useSelector(selectIsShowSpiciness);
  const error = useSelector(selectError);
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
      {isLoading && <Spinner/>}
      {isLoaded && <Outlet/>}
      {error && <span>Error loading database: {error.message}</span>}
    </Fragment>
  )
};

export default Shop;