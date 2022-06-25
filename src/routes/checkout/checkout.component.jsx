import { useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import Button from '../../components/button/button.component.jsx';
import './checkout.styles.scss';

const CheckoutPage = () => {
  const {
    setIsCartOpen,
    cartItems,
    addItemToCart,
    decItemInCart,
    removeItemFromCart
  } = useContext(CartContext);

  useEffect(() => setIsCartOpen(false), [setIsCartOpen]);

  return (
    <div className='checkout-container'>
      <h5 className='checkout-row'>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </h5>
      {cartItems.map(item => {
        const { barcode, title, quantity, price, imageUrl } = item;
        const incItemQuantityHandler = () => addItemToCart(item);
        const decItemQuantityHandler = () => decItemInCart(item);
        const removeItemHandler = () => removeItemFromCart(item);
        return (
        <div key={barcode} className='checkout-row'>
          <div><img src={imageUrl} alt={title} className='checkout-image' /></div>
          <div>{title}</div>
          <div className='quantity-container'>
            <Button type='button' buttonVariation='borderless' onClick={decItemQuantityHandler}>{`◄`}</Button>
              {quantity}
            <Button type='button' buttonVariation='borderless' onClick={incItemQuantityHandler}>{`►`}</Button>
          </div>
          <div>₴{price}</div>
          <div><Button type='button' buttonVariation='borderless' onClick={removeItemHandler}>x</Button></div>
        </div>
      )})}
    </div>
  )
};

export default CheckoutPage;