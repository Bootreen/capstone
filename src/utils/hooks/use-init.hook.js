import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from '../../store/user/user.action';
import { fetchDatabaseStart } from '../../store/shop/shop.action';

export const useInit = () => {
  const dispatch = useDispatch();

  // dispatch is never going to change, therefore fire this hook only once
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchDatabaseStart());
  // eslint-disable-next-line
  }, []);

  // Bulk product upload to Firestore from JSON
  // useEffect(() => {
  //   addCollectionAndDocuments('shop', SHOP_DB);
  // }, [])
}