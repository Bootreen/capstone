import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context.jsx';
import { SpicinessToggle, ToggleLabel, ToggleCheckbox } from './shop.styles.jsx';

const Shop = () => {
  const { isShowSpiciness, setIsShowSpiciness } = useContext(ProductsContext);
  const spicinessToggleHandler = () => setIsShowSpiciness(!isShowSpiciness);

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