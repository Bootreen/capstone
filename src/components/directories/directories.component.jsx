import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoriesContainer } from './directories.styles';

const Directories = ({ categories }) => (
  <DirectoriesContainer>
    {categories.map(category => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </DirectoriesContainer>
);

export default Directories;