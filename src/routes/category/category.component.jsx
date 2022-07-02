import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import './category.styles.scss';

const Category = ({ index }) => {
  const { categories, products, getProductsByCategory, getProductsBySpiciness } = useContext(ProductsContext);
  const { path } = useParams();

  const renderProductListByCategory = (category) => categories.includes(category) ?
  (<div className='category-container'>
    <h2>
      <Link to='/shop'>
        <span className='category-title'>SHOP</span>
      </Link>
      <span className='category-title'> / {category.toUpperCase()}</span>
    </h2>
    <div className='category'>
      {
        getProductsByCategory(category)
          .map(product =>
            (<ProductCard key={product.barcode} product={product}/>))
      }
    </div>
  </div>) : null;

  if (index) return (
    <Fragment>
      {categories.map((category, index) => (
        <div key={index} className='category-container'>
          <h2>
            <Link to={`/shop/${category.replaceAll(' ', '-').toLowerCase()}`}>
              <span className='category-title'>{category.toUpperCase()}</span>
            </Link>
          </h2>
          <div className='category'>
          {
            products
              .filter((_, index) => index < 4)
              .map(product =>
                (<ProductCard key={product.barcode} product={product}/>))
          }
          </div>
        </div>
      ))}
    </Fragment>
  );

  const category = path.replaceAll('-', ' ').toLowerCase();

  const renderProductListBySpiciness = (fromValue, toValue) => (
    <Fragment>
      {categories.map((category, index) => (
        <div key={index} className='category-container'>
          <h2>
            <Link to={`/shop/${category.replaceAll(' ', '-').toLowerCase()}`}>
              <span className='category-title'>{category.toUpperCase()}</span>
            </Link>
          </h2>
          <div className='category'>
            {
              getProductsBySpiciness(fromValue, toValue)
                .filter(product => product.category.toLowerCase() === category)
                .map(product =>
                  (<ProductCard key={product.barcode} product={product}/>))
            }
          </div>
        </div>
      ))}
    </Fragment>
  );

  switch (category) {
    case 'mild': return renderProductListBySpiciness(1, 5);
    case 'hot': return renderProductListBySpiciness(6, 11);
    default: return renderProductListByCategory(category);
  }
}

export default Category;