import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartContext } from '../../contexts/cart.context.jsx';
import { selectIsShowSpiciness } from '../../store/shop/shop.selector.js';
import Button from '../button/button.component.jsx';
import {
  ProductCardContainer,
  ProductFooter,
  ProductImage,
  ProductPrice,
  ProductTitle,
  SpicinessLabel
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const IMG_URL_PREFIX = 'https://tangelocat.com/images/';
  const IMG_EXTENSION = '.png';
  const isShowSpiciness = useSelector(selectIsShowSpiciness);
  const { addItemToCart } = useContext(CartContext);
  const addToCartHandler = () => addItemToCart(product);
  const { title, price, imageUrl, spiciness } = product;

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={title} />
      {isShowSpiciness && (
        <SpicinessLabel src={IMG_URL_PREFIX + spiciness + IMG_EXTENSION} alt=''/>
      )}
      <ProductFooter>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>₴{price}</ProductPrice>
      </ProductFooter>
      <Button type='button' buttonVariation='inverted' onClick={addToCartHandler}>Add to cart</Button>
    </ProductCardContainer>
  )
};

export default ProductCard;