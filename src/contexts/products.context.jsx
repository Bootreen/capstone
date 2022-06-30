import { createContext, useEffect, useState } from 'react';
// Bulk product upload to Firestore from JSON dependencies:
// import SHOP_DB from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap.products);
    }
    getCategoriesMap();
  }, []);

  // Bulk product upload to Firestore from JSON
  // useEffect(() => {
  //   addCollectionAndDocuments('shop', SHOP_DB);
  // }, [])

  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};