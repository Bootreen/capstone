import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component.jsx';
import Button, { BUTTONS } from '../button/button.component.jsx';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../utils/firebase/firebase.utils.js';
import { signInGoogleStart, signInEmailStart } from '../../store/user/user.action.js';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogleRedirectHandler = () => dispatch(signInGoogleStart());

  useEffect(() => (async () => await getRedirectResult(auth)), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInEmailStart (email, password));
      resetFormFields();
    } catch(error) {
      switch (error.code) {
        case 'auth/wrong-password': alert('Incorrect password'); break;
        case 'auth/user-not-found': alert('There is no user with such email'); break;
        default: alert('Login error');
        console.log('User login error:', error.message);
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          inputGroupOptions={{
            label: 'Email',
            type: 'email',
            onChange: handleChange,
            name: 'email',
            value: email,
            required: true
          }}
        />
        <FormInput
          inputGroupOptions={{
            label: 'Password',
            type: 'password',
            onChange: handleChange,
            name: 'password',
            value: password,
            required: true
          }}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonVariation={BUTTONS.google}
            onClick={signInWithGoogleRedirectHandler}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
};

export default SignInForm;