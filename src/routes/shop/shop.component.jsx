import { Fragment, useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [isShowSpiciness, setIsShowSpiciness] = useState(false);
  const spicinessToggleHandler = () => setIsShowSpiciness(!isShowSpiciness);

  return (
    <Fragment>
      <div>
        <input type='checkbox' id='spiciness' name='spiciness' onClick={spicinessToggleHandler}></input>
        <label htmlFor='spiciness'>Show Spiciness</label>
      </div>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard key={product.barcode} product={product} show_spiciness={isShowSpiciness}/>
        ))}
      </div>
    </Fragment>
  )
};

export default Shop;