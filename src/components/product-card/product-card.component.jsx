import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectIsShowSpiciness } from '../../store/shop/shop.selector';
import Button, { BUTTONS } from '../button/button.component';
import {
  ProductCardContainer,
  ProductFooter,
  ProductImage,
  ProductPrice,
  ProductTitle,
  SpicinessLabel
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const IMG_URL_PREFIX = 'https://tangelocat.com/images/';
  const IMG_EXTENSION = '.png';
  const isShowSpiciness = useSelector(selectIsShowSpiciness);
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addItemToCart(product));
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
      <Button
        type='button'
        buttonVariation={BUTTONS.inverted}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
};

export default ProductCard;