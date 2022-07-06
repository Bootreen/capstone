import DirectoryItem from '../directory-item/directory-item.component.jsx';
import { DirectoriesContainer } from './directories.styles.jsx';

const Directories = ({ categories }) => (
  <DirectoriesContainer>
    {categories.map(category => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </DirectoriesContainer>
);

export default Directories;