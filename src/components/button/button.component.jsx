import {
  BaseButton,
  InvertedButton,
  BorderlessButton,
  GoogleSignInButton,
  PaymentButton,
  ButtonSpinner
} from './button.styles';

export const BUTTONS = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
  borderless: 'borderless',
  payment: 'payment'
};

const selectButtonVariation = (buttonVariation = BUTTONS.base) =>
  ({
    [BUTTONS.base]: BaseButton,
    [BUTTONS.inverted]: InvertedButton,
    [BUTTONS.google]: GoogleSignInButton,
    [BUTTONS.borderless]: BorderlessButton,
    [BUTTONS.payment]: PaymentButton
  }[buttonVariation])

const Button = ({ children, buttonVariation, isLoading, ...otherProps }) => {
  const CurrentButton = selectButtonVariation(buttonVariation);
  return (
    <CurrentButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children}
    </CurrentButton>
  )
};

export default Button;