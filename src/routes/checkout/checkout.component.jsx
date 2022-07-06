import { useEffect, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import Button from '../../components/button/button.component.jsx';
import { CheckoutContainer, CheckoutImage, CheckoutRow, QuantityContainer, TableHeaderRow, TotalRow } from './checkout.styles.jsx';

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
    <CheckoutContainer>
      <TableHeaderRow>
        <h5>Product</h5>
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price, UAH</h5>
        <h5>Remove</h5>
      </TableHeaderRow>
      {cartItems.map(item => {
        const { barcode, title, quantity, price, imageUrl } = item;
        const incItemQuantityHandler = () => addItemToCart(item);
        const decItemQuantityHandler = () => decItemInCart(item);
        const removeItemHandler = () => removeItemFromCart(item);
        return (
        <CheckoutRow key={barcode}>
          <CheckoutImage src={imageUrl} alt={title}/>
          <div>{title}</div>
          <QuantityContainer>
            <Button
              type='button'
              buttonVariation='borderless'
              onClick={decItemQuantityHandler}
            >
             ◄
            </Button>
              {quantity}
            <Button
              type='button'
              buttonVariation='borderless'
              onClick={incItemQuantityHandler}
            >
              ►
            </Button>
          </QuantityContainer>
          <div>{price}</div>
          <Button
            type='button'
            buttonVariation='borderless'
            onClick={removeItemHandler}
          >
            x
          </Button>
        </CheckoutRow>
      )})}
      <TotalRow>
        <h4>Cart Total:</h4>
        <h4>{cartTotal}</h4>
      </TotalRow>
    </CheckoutContainer>
  )
};

export default CheckoutPage;