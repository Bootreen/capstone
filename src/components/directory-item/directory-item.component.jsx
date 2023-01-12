import { titleUrlToggle } from '../../utils/strings/strings.utils';
import {
  BackgroundImage,
  Directory,
  DirectoryLink
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryLink to={`/shop/${titleUrlToggle(title)}`}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Directory>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Directory>
    </DirectoryLink>
  )
};

export default DirectoryItem;