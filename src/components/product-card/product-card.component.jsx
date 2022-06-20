import Button from '../button/button.component.jsx';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { title, price, imageUrl, sku, spiciness } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={title} />
      <div className='product-footer'>
        <div className='title'>{title}</div>
        <span className='price'>{`₴${price}`}</span>
      </div>
      <Button type='button' buttonVariation='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard;