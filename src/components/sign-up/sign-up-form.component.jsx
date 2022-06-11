import { Fragment, useState, useEffect } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

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
  };

  return (
    <Fragment>
      <h1>Sign up with email</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName} />
        <label>Email</label>
        <input type='email' required onChange={handleChange} name='email' value={email} />
        <label>Password</label>
        <input type='password' required onChange={handleChange} name='password' value={password} />
        <label>Confirm Password</label>
        <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <button type='Submit'>Sign Up</button>
      </form>
    </Fragment>
  )
};

export default SignUpForm;