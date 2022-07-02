import { Link } from 'react-router-dom';
import { titleUrlToggle } from '../../utils/firebase/firebase.utils.js';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => (
  <Link
    className='directory-container'
    to={`/shop/${titleUrlToggle(category.title)}`}
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