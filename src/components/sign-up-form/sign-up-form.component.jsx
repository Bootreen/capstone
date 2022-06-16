import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
import Button from "../button/button.component.jsx";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch(error) {
      console.log('User creation error:', error.message);
    }    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-up-container'>
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
        <div className='buttons-container'>
          <Button type='Submit'>Sign Up</Button>
        </div>
      </form>
    </div>
  )
};

export default SignUpForm;