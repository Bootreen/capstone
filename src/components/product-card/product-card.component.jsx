import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ProductsContext } from '../../contexts/products.context.jsx';
import Button from '../button/button.component.jsx';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const IMG_URL_PREFIX = 'https://tangelocat.com/images/';
  const IMG_EXTENSION = '.png';
  const { title, price, imageUrl, spiciness } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCartHandler = () => addItemToCart(product);
  const { isShowSpiciness } = useContext(ProductsContext);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={title} />
      {isShowSpiciness && (
        <img src={IMG_URL_PREFIX + spiciness + IMG_EXTENSION} alt='' className='spiciness-label'/>
      )}
      <div className='product-footer'>
        <div className='title'>{title}</div>
        <span className='price'>₴{price}</span>
      </div>
      <Button type='button' buttonVariation='inverted' onClick={addToCartHandler}>Add to cart</Button>
    </div>
  )
};

export default ProductCard;