import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getCategoriesAndDocuments
} from '../firebase/firebase.utils.js';
import { setCurrentUser } from '../../store/user/user.action.js';
import { setProducts, setCategories } from '../../store/shop/shop.action.js';

export const useInit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {createUserDocumentFromAuth(user)};
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  // dispatch is never going to change, therefore fire this hook only once
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const setCategoriesAndProducts = async () => {
      const productsObject = await getCategoriesAndDocuments();
      dispatch(setProducts(productsObject.products));
      dispatch(setCategories(productsObject.products
        .map(product => product.category.toLowerCase())
        .reduce((filterOffDuplicates, entry) =>
          filterOffDuplicates.includes(entry) ? filterOffDuplicates : [...filterOffDuplicates, entry], [])
      ))
    }
    setCategoriesAndProducts();
  // dispatch is never going to change, therefore fire this hook only once
  // eslint-disable-next-line
  }, []);

  // Bulk product upload to Firestore from JSON
  // useEffect(() => {
  //   addCollectionAndDocuments('shop', SHOP_DB);
  // }, [])
}