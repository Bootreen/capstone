import { Routes, Route } from 'react-router-dom';
import { useInit } from './utils/hooks/use-init.hook.js'
import MenuBar from './routes/menu-bar/menu-bar.component.jsx'
import Home from './routes/home/home.component.jsx';
import AuthenticationPage from './routes/authentication/authentication.component.jsx';
import CheckoutPage from './routes/checkout/checkout.component.jsx';
import Shop from './routes/shop-page/shop-page.component.jsx';
import Category from './routes/category/category.component.jsx';

const App = () => {
  useInit();
  return (
    <Routes>
      <Route path='/' element={<MenuBar />}>
        <Route index element={<Home />}/>
        <Route path='shop/' element={<Shop />}>
          <Route index element={<Category parent={true}/>}/>
          <Route path=':path' element={<Category parent={false}/>}/>
        </Route>
        <Route path='auth' element={<AuthenticationPage />}/>
        <Route path='checkout' element={<CheckoutPage />}/>
      </Route>
    </Routes>
  )
};

export default App;