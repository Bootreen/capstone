import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { selectCartCountAndTotal } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import Button, { BUTTONS } from '../button/button.component.jsx';
import { PaymentFormContainer, FormContainer } from './payment-form.styles.jsx';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartCountAndTotal).cartTotal;
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount * 100 })
      }
    ).then(res => res.json());

    const {paymentIntent: { client_secret }} = response;

    const paymentResult = await stripe.confirmCardPayment(
      client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: currentUser ? currentUser.displayName : 'Anonymous' }
        }
      }
    );

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error.message)
      else if (paymentResult.paymentIntent.status === 'succeeded') alert('Payment Successful');
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Credit Card Payment:</h3>
        <CardElement />
        <Button
          isLoading={isProcessingPayment}
          buttonVariation={BUTTONS.payment}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;