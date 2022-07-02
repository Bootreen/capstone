import ProductCard from '../product-card/product-card.component.jsx';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='category-preview-title'>{title.toUpperCase()}</span>
      </h2>
      <div className='category-preview'>
        {
          products
            .filter((_, index) => index < 4)
            .map(product =>
              (<ProductCard key={product.barcode} product={product}/>))
        }
      </div>
    </div>
  )
};

export default CategoryPreview;