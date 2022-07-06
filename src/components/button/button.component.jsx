import {
  BaseButton,
  InvertedButton,
  BorderlessButton,
  GoogleSignInButton
} from './button.styles.jsx';

const Button = ({ children, buttonVariation, ...otherProps }) => {
  switch (buttonVariation) {
    case 'inverted': return <InvertedButton {...otherProps}>{children}</InvertedButton>;
    case 'borderless': return <BorderlessButton {...otherProps}>{children}</BorderlessButton>;
    case 'google': return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>;
    default: return <BaseButton {...otherProps}>{children}</BaseButton>
  }
};

export default Button;