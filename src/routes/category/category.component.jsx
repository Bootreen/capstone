import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import './category.styles.scss';

const Category = () => {
  const { path } = useParams();
  const category = path.replaceAll('-', ' ').toLowerCase();
  const { categories, getProductsByCategory, getProductsBySpiciness } = useContext(ProductsContext);

  const renderProductListBySpiciness = (fromValue, toValue) => (
    <Fragment>
      {categories.map((category, index) => (
        <Fragment key={index}>
          <h2>
            <span className='category-title'>{category.toUpperCase()}</span>
          </h2>
          <div className='category'>
            {
              getProductsBySpiciness(fromValue, toValue)
                .filter(product => product.category.toLowerCase() === category)
                .map(product =>
                  (<ProductCard key={product.barcode} product={product}/>))
            }
          </div>
        </Fragment>
      ))}
    </Fragment>
  );

  const renderProductListByCategory = (category) => categories.includes(category) ?
    (<Fragment>
      <h2>
        <span className='category-title'>{category.toUpperCase()}</span>
      </h2>
      <div className='category'>
        {
          getProductsByCategory(category)
            .map(product =>
              (<ProductCard key={product.barcode} product={product}/>))
        }
      </div>
    </Fragment>) : null;

  switch (category) {
    case 'mild': return renderProductListBySpiciness(1, 5);
    case 'hot': return renderProductListBySpiciness(6, 11);
    default: return renderProductListByCategory(category);
  }
}

export default Category;