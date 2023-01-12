import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsCartOpen,
  addItemToCart,
  decItemInCart,
  removeItemFromCart
} from '../../store/cart/cart.action';
import {
  selectCartCountAndTotal,
  selectCartItems
} from '../../store/cart/cart.selector';

import Button, { BUTTONS } from '../../components/button/button.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  CheckoutImage,
  CheckoutRow,
  QuantityContainer,
  TableHeaderRow,
  TotalRow
} from './checkout.styles';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartCountAndTotal).cartTotal;

  const dispatch = useDispatch();
  // Autoclose cart at the first checkout page render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {dispatch(setIsCartOpen(false))}, []);

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
        const incItemQuantityHandler = () => dispatch(addItemToCart(item));
        const decItemQuantityHandler = () => dispatch(decItemInCart(item));
        const removeItemHandler = () => dispatch(removeItemFromCart(item));
        return (
        <CheckoutRow key={barcode}>
          <CheckoutImage src={imageUrl} alt={title}/>
          <div>{title}</div>
          <QuantityContainer>
            <Button
              type='button'
              buttonVariation={BUTTONS.borderless}
              onClick={decItemQuantityHandler}
            >
             ◄
            </Button>
              {quantity}
            <Button
              type='button'
              buttonVariation={BUTTONS.borderless}
              onClick={incItemQuantityHandler}
            >
              ►
            </Button>
          </QuantityContainer>
          <div>{price}</div>
          <Button
            type='button'
            buttonVariation={BUTTONS.borderless}
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
      <PaymentForm />
    </CheckoutContainer>
  )
};

export default CheckoutPage;