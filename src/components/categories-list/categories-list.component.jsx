import CategoryItem from '../category-item/category-item.component.jsx';
import './categories-list.styles.scss';

const CategoriesList = ({ categories }) => (
  <div className='categories-container'>
    {categories.map(category => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
);

export default CategoriesList;