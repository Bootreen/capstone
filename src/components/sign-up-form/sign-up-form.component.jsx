import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action.js';
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import { ButtonsContainer, SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    };

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch(error) {
      console.log('User creation error:', error.message);
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          inputGroupOptions={{
            label: 'Display Name',
            type: 'text',
            onChange: handleChange,
            name: 'displayName',
            value: displayName,
            required: true
          }}
        />
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
        <FormInput
          inputGroupOptions={{
            label: 'Confirm Password',
            type: 'password',
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword,
            required: true
          }}
        />
        <ButtonsContainer>
          <Button type='Submit'>Sign Up</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
};

export default SignUpForm;