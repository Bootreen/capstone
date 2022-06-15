import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  inverted: 'inverted',
  google: 'google-sign-in'
}

const Button = ({ children, buttonVariation, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonVariation]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;