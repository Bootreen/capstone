import DirectoryItem from '../directory-item/directory-item.component.jsx';
import './directories.styles.scss';

const Directories = ({ categories }) => (
  <div className='directories-container'>
    {categories.map(category => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </div>
);

export default Directories;