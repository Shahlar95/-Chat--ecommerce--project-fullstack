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


function App() {
  const user = useSelector((state)=> state.user);

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route index element = {<Home/>}/>
        {!user && 
        <>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        </>}
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
