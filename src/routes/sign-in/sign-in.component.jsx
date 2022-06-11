import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,  
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  
  useEffect(() => {
    const fetchDataAfterRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    fetchDataAfterRedirect();
  }, [])

  return (
    <div>
      <h1>Sign In Page</h1>      
      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;