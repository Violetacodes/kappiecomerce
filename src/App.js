import './App.css';
import React from 'react';
import Main from './Main';
import cart from "./../src/Components/ProductsComponents/cart.png";
import { useSelector } from "react-redux";
import { getTotalArticles } from './redux/cartSlice';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from './Components/Cart/Cart';


function App() {
  const totalArticles = useSelector(getTotalArticles);
  
  return (

    <div>
      <Router>
        <nav className='block'>
        <Link to="/" className='link'>Home <img className="cartbtn" src='https://img.icons8.com/material-sharp/2x/home.png' alt='homebtn' /></Link>
        <Link to="/cart" className="link cart"><img className="cartbtn" src={cart} alt="cartbt"/>{totalArticles}</Link>
        </nav>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
