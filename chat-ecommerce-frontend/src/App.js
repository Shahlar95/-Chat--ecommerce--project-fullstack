import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import { useSelector } from 'react-redux';
import NewProduct from './page/NewProduct';
import ProductPage from './page/ProductPage';
import CategoryPage from './page/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './page/CartPage';
import OrdersPage from './page/OrdersPage';
import AdminDashboard from './page/AdminDashboard';


function App() {
  const user = useSelector((state)=> state.user);

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
        <Route index element = {<Home/>}/>
        {!user && 
        <>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        </>}
        {user && (
          <>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/orders' element={<OrdersPage/>}/>

          </>
        )}
        {user && user.isAdmin && (
          <>
          <Route path='/admin' element={<AdminDashboard/>}/>
          </>
        )}
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/category/:category' element={<CategoryPage/>}/>

        <Route path='/new-product' element={<NewProduct/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
