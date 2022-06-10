import { Routes, Route } from 'react-router-dom';
import MenuBar from './routes/menu-bar/menu-bar.component.jsx'
import Home from './routes/home/home.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';

const Shop = () => (
  <h1>Shop page</h1>
);

const App = () => (
  <Routes>
    <Route path='/' element={<MenuBar />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;