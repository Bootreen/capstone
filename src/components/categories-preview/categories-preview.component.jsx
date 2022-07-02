import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context.jsx';
import CategoryPreview from '../category-preview/category-preview.component.jsx';

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);
  const categories = products
    .map(product => product.category)
    .reduce((filterOffDuplicates, entry) =>
      filterOffDuplicates.includes(entry) ? filterOffDuplicates : [...filterOffDuplicates, entry], []);

  return (
    <Fragment>
      {categories.map(category => {
        const filteredProducts = products.filter(product => product.category === category);
        return (
          <CategoryPreview
            key={category}
            title={category}
            products={filteredProducts}
          />
        )
      })}
    </Fragment>
  )
};

export default CategoriesPreview;