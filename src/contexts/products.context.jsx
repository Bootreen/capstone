import { createContext, useEffect, useState } from 'react';
// Bulk product upload to Firestore from JSON dependencies:
// import SHOP_DB from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
  isShowSpiciness: false
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isShowSpiciness, setIsShowSpiciness] = useState(false);

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

  const value = { products, setProducts, isShowSpiciness, setIsShowSpiciness };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};