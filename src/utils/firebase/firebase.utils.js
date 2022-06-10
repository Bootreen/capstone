import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);