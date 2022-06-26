import { createContext, useEffect, useState } from 'react';
// Upload products to DB from JSON dependencies
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

  // Upload products to DB from JSON dummy function
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DB);
  // }, [])

  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};