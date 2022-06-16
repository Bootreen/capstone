import { Routes, Route } from 'react-router-dom';
import MenuBar from './routes/menu-bar/menu-bar.component.jsx'
import Home from './routes/home/home.component.jsx';
import AuthenticationPage from './routes/authentication/authentication.component.jsx';

const Shop = () => (
  <h1>Shop page</h1>
);

const App = () => (
  <Routes>
    <Route path='/' element={<MenuBar />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<AuthenticationPage />} />
    </Route>
  </Routes>
);

export default App;