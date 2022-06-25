import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { item, quantity } = cartItem;

  return (
    <div>
      <h2>{`${item['title']}: ${quantity}`}</h2>
    </div>
  )
};

export default CartItem;