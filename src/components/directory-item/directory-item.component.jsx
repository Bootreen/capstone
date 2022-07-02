import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => (
  <Link
    className='directory-container'
    to={`/shop/${category.title.replaceAll(' ', '-').toLowerCase()}`}
  >
    <div className='background-image' style={{
      backgroundImage: `url(${category.imageUrl})`
    }} />
    <div className='directory'>
      <h2>{category.title}</h2>
      <p>Shop now</p>
    </div>
  </Link>
);

export default DirectoryItem;