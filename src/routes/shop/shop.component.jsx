
import WEB_STORE_DB from '../../assets/shop-data.json';

const Shop = () => {
  return (
    <div>
      {WEB_STORE_DB.map(({ barcode, title }) => (
        <div key={barcode}>
          <h1>{title}</h1>
        </div>
      ))}
    </div>
  )
};

export default Shop;