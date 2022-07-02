import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const selectCategoryHandler = () =>
    navigate(`/shop/${category.title.replaceAll(' ', '-').toLowerCase()}`);

  return (
    <div className='category-container' onClick={selectCategoryHandler}>
      <div className='background-image' style={{
        backgroundImage: `url(${category.imageUrl})`
      }} />
      <div className='category-body-container'>
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
};

export default CategoryItem;