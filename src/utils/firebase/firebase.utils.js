import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNCEMFIudw0eokya7Yn5adOVB9mb_lNPk",
  authDomain: "tcat-shop-db.firebaseapp.com",
  projectId: "tcat-shop-db",
  storageBucket: "tcat-shop-db.appspot.com",
  messagingSenderId: "293501476753",
  appId: "1:293501476753:web:9d6d300a18982276b94430"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};