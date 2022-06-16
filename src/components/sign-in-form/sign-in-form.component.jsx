import { useState } from "react";
import {
  signInWithGoogleRedirect,
  signInDefault
} from '../../utils/firebase/firebase.utils.js';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''  
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();    
    try {
      const response = await signInDefault(email, password);
      console.log(response);            
    } catch(error) {
      switch (error.code) {
        case 'auth/wrong-password': alert('Incorrect password'); break;
        case 'auth/user-not-found': alert('There is no user with such email'); break;
        default: alert('Login error');
        console.log('User login error:', error.message);
      }      
    }
    resetFormFields();
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-in-container'>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonVariation='google' onClick={signInWithGoogleRedirect}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
};

export default SignInForm;