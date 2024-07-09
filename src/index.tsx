import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {
  toplamaYap,
  carpmaYap
} from './utils/Config';
import Register from './pages/Register';
import SearchUser from './pages/SearchUser';
import ProductList from './pages/ProductList';
import Yarisma from './pages/Yarisma';
import Odev4 from './pages/Odev4';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/searchuser' element={<SearchUser />} />
    <Route path='/products' element={<ProductList />} />
    <Route path='/yarisma' element={<Yarisma />} />
    <Route path='/odev4' element={<Odev4 />} />
    
    
  </Routes>
</BrowserRouter>


root.render(route);
