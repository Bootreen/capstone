const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Sauces'
    },
    {
      id: 2,
      title: 'Ground Chili'
    },
    {
      id: 3,
      title: 'Fresh Chili'
    },
    {
      id: 4,
      title: 'Mild'
    },
    {
      id: 5,
      title: 'Hot'
    }
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ id, title }) => 
        (<div className='category-container'>
            {/* <img /> */}
            <div id={id} className='category-body-container'>
              <h2>{title}</h2>
              <p>Shop now</p>
            </div>
          </div>)
      )}      
    </div>
  );
}

export default App;