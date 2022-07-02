import { createContext, useEffect, useState } from 'react';
// Bulk product upload to Firestore from JSON dependencies:
// import SHOP_DB from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  categories: [],
  setCategories: () => {},
  products: [],
  setProducts: () => {},
  isShowSpiciness: false,
  setIsShowSpiciness: () => {},
  getProductsByCategory: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isShowSpiciness, setIsShowSpiciness] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      const productsObject = await getCategoriesAndDocuments();
      setProducts(productsObject.products);
    }
    getProductsList();
  }, []);

  // Bulk product upload to Firestore from JSON
  // useEffect(() => {
  //   addCollectionAndDocuments('shop', SHOP_DB);
  // }, [])

  useEffect(() => {
    setCategories(products
      .map(product => product.category.toLowerCase())
      .reduce((filterOffDuplicates, entry) =>
        filterOffDuplicates.includes(entry) ? filterOffDuplicates : [...filterOffDuplicates, entry], [])
    );
  }, [products]);

  const getProductsByCategory = (category) => products.filter(product =>
    product.category.toLowerCase() === category);

  const value = {
    categories,
    products,
    getProductsByCategory,
    isShowSpiciness,
    setIsShowSpiciness
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};