import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener
} from '../firebase/firebase.utils.js';
import { setCurrentUser } from '../../store/user/user.action.js';
import { fetchDatabaseAsync } from '../../store/shop/shop.action.js';

export const useInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {createUserDocumentFromAuth(user)};
      dispatch(setCurrentUser(user));
    });
    dispatch(fetchDatabaseAsync());
    return unsubscribe;
  // dispatch is never going to change, therefore fire this hook only once
  // eslint-disable-next-line
  }, []);

  // Bulk product upload to Firestore from JSON
  // useEffect(() => {
  //   addCollectionAndDocuments('shop', SHOP_DB);
  // }, [])
}