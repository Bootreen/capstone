import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context.jsx';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

const CategoriesPreview = () => {
  const { categories, getProductsByCategory } = useContext(ProductsContext);

  return (
    <Fragment>
      {categories.map(category => (
        <CategoryPreview
          key={category}
          title={category}
          products={getProductsByCategory(category)}
        />
      ))}
    </Fragment>
  )
};

export default CategoriesPreview;