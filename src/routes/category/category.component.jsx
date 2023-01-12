import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { selectCategories, selectProducts } from '../../store/shop/shop.selector';
import ProductCard from '../../components/product-card/product-card.component';
import { titleUrlToggle } from '../../utils/strings/strings.utils';
import { CategoryContainer, CategoryTitle, CategoryBody } from './category.styles';
import { useSelector } from 'react-redux';

const Category = ({ parent }) => {
  const SPICINESS = {
    'mild': [1, 5],
    'hot': [6, 11]
  };
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const { path } = useParams();
  const categoryPath = parent ? '' : titleUrlToggle(path);

  const getProductsByCategory = (category) =>
    products.filter(product => product.category.toLowerCase() === category);

  const filters = (mode) => {
    if (mode === 'preview') return ((_, index) => index < 4)
      else if (mode.length === 2 && mode.every(e => typeof e === 'number'))
        return (product => product.spiciness >= mode[0] && product.spiciness <= mode[1])
          else return (_ => _)
  };

  const renderProductList = (categories, ...params) => {
    return (
    categories.map((category, index) => (
      <CategoryContainer key={index}>
        <h2>
          {(categories.length > 1
            ? (
              <Link to={`/shop/${titleUrlToggle(category)}`}>
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
              </Link>
              )
            : (
              <Fragment>
                <Link to='/shop'>
                  <CategoryTitle>SHOP</CategoryTitle>
                </Link>
                <CategoryTitle> / </CategoryTitle>
                <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
              </Fragment>
            )
          )}
        </h2>
        <CategoryBody>
          {
            getProductsByCategory(category)
              .filter(filters(...params))
              .map(product =>
                (<ProductCard key={product.barcode} product={product}/>))
          }
        </CategoryBody>
      </CategoryContainer>
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