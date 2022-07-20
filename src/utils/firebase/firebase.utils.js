import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNCEMFIudw0eokya7Yn5adOVB9mb_lNPk",
  authDomain: "tcat-shop-db.firebaseapp.com",
  projectId: "tcat-shop-db",
  storageBucket: "tcat-shop-db.appspot.com",
  messagingSenderId: "293501476753",
  appId: "1:293501476753:web:9d6d300a18982276b94430"
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'shop');
  const tempQuery = query(collectionRef);
  const querySnapshot = await getDocs(tempQuery);

  // Single category simplified download
  const { title, items } = querySnapshot.docs[0].data();
  return {[title.toLowerCase()]: items};

  // Multiple categories download
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
};

export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, provider);
export const signInDefault = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('User creation error:', error.message);
    }
  }

  return userDocRef;
};