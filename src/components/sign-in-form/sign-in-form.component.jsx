import { useState, useEffect, useContext } from "react";
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import { UserContext } from '../../contexts/user.context.jsx';
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  signInDefault,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils.js';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''  
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormFields);

  useEffect(() => {
    const fetchDataAfterRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {        
        await createUserDocumentFromAuth(response.user);
        setCurrentUser(response.user);
      }
    };
    fetchDataAfterRedirect();
  }, [setCurrentUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();    
    try {
      const { user } = await signInDefault(email, password);
      setCurrentUser(user);
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