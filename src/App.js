import CategoriesList from './components/categories-list/categories-list.component.jsx';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Sauces',
      imageUrl: 'https://tangelocat.com/images/sauces-min.jpg'
    },
    {
      id: 2,
      title: 'Ground Chili',
      imageUrl: 'https://tangelocat.com/images/ground-chili-min.jpg'
    },
    {
      id: 3,
      title: 'Fresh Chili',
      imageUrl: 'https://tangelocat.com/images/fresh-chili-min.jpg'
    },
    {
      id: 4,
      title: 'Mild',
      imageUrl: 'https://tangelocat.com/images/mild-min.jpg'
    },
    {
      id: 5,
      title: 'Hot',
      imageUrl: 'https://tangelocat.com/images/hot-min.jpg'
    }
  ];
  
  return (
    <CategoriesList categories={categories} />    
  );
}

export default App;