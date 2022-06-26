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
    removeItemFromCart,
    cartTotal
  } = useContext(CartContext);

  useEffect(() => setIsCartOpen(false), [setIsCartOpen]);

  return (
    <div className='checkout-container'>
      <div className='checkout-row table-header-row'>
        <h5 className='first-column'>Product</h5>
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price, UAH</h5>
        <h5>Remove</h5>
      </div>
      {cartItems.map(item => {
        const { barcode, title, quantity, price, imageUrl } = item;
        const incItemQuantityHandler = () => addItemToCart(item);
        const decItemQuantityHandler = () => decItemInCart(item);
        const removeItemHandler = () => removeItemFromCart(item);
        return (
        <div key={barcode} className='checkout-row'>
          <img src={imageUrl} alt={title} className='checkout-image' />
          <div>{title}</div>
          <div className='quantity-container'>
            <Button type='button' buttonVariation='borderless' onClick={decItemQuantityHandler}>{`◄`}</Button>
              {quantity}
            <Button type='button' buttonVariation='borderless' onClick={incItemQuantityHandler}>{`►`}</Button>
          </div>
          <div>{price}</div>
          <Button type='button' buttonVariation='borderless' onClick={removeItemHandler}>x</Button>
        </div>
      )})}
      <div className='checkout-row total-row'>
        <h4 className='total'>Cart Total:</h4>
        <h4 className='amount'>{cartTotal}</h4>
      </div>
    </div>
  )
};

export default CheckoutPage;