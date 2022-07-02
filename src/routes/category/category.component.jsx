import { Fragment, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import { titleUrlToggle } from '../../utils/firebase/firebase.utils.js';
import './category.styles.scss';

const Category = ({ index }) => {
  const SPICINESS = {
    'mild': [1, 5],
    'hot': [6, 11]
  }
  const { categories, getProductsByCategory } = useContext(ProductsContext);
  const { path } = useParams();
  const categoryPath = index ? '' : titleUrlToggle(path);

  const filters = (mode) => {
    if (mode === 'preview') return ((_, index) => index < 4)
      else if (mode.length === 2 && typeof mode[0] === 'number' && typeof mode[1] === 'number')
        return (product => product.spiciness >= mode[0] && product.spiciness <= mode[1])
          else return (_ => _)
  };

  const renderProductList = (categories, ...params) => {
    return (
    categories.map((category, index) => (
      <div className='category-container' key={index}>
        <h2>
          {(categories.length > 1
            ? (
              <Link to={`/shop/${titleUrlToggle(category)}`}>
                <span className='category-title'>{category.toUpperCase()}</span>
              </Link>
              )
            : (
              <Fragment>
                <Link to='/shop'>
                  <span className='category-title'>SHOP</span>
                </Link>
                <span className='category-title'> / </span>
                <span className='category-title'>{category.toUpperCase()}</span>
              </Fragment>
            )
          )}
        </h2>
        <div className='category'>
          {
            getProductsByCategory(category)
              .filter(filters(...params))
              .map(product =>
                (<ProductCard key={product.barcode} product={product}/>))
          }
        </div>
      </div>
    ))
  )};

  // Rendering all categories preview mode by default
  return categoryPath === '' ? renderProductList(categories, 'preview')
    // Single category subroute
    : categories.includes(categoryPath) ? renderProductList([categoryPath], 'full')
    // Spiciness filter mode
    : categoryPath === 'mild' || 'hot' ? renderProductList(categories, SPICINESS[categoryPath])
    : null;
}

export default Category;