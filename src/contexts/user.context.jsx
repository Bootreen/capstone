import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    console.log('Call outside event listener');
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log('Call inside event listener: ', user);
      if (user) {createUserDocumentFromAuth(user)};
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}