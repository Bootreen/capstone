import {
  CartItemContainer,
  CartItemImage,
  CartItemSpan,
  ItemDetails
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, title, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${title}`} />
      <ItemDetails>
        <CartItemSpan>{title}</CartItemSpan>
        <CartItemSpan>{quantity} x ₴{price}</CartItemSpan>
      </ItemDetails>
    </CartItemContainer>
  )
};

export default CartItem;