import './App.css';
import React from 'react';
import Main from './Main';
import cart from "./../src/Components/ProductsComponents/cart.png";
import { useSelector } from "react-redux";
import { getTotalArticles } from './redux/cartSlice';
import gsap from 'gsap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Welcome from './Components/ProductsComponents/Welcome';
import Bottom from './Bottom';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
const totalArticles = useSelector(getTotalArticles);
const {isLoading} = useAuth0();
if(isLoading) return <h3>Wait a few seconds...</h3>
  return (
    <div>
       <Welcome />
      <Router>
        <nav className='blockhome'>
        <Link to="/" className='link'>Home <img className="cartbtn" src='https://img.icons8.com/material-sharp/2x/home.png' alt='homebtn' /></Link>
        <p className='border'></p>
        <Link to="/about" className='link'>About <img className="cartbtn" src='https://img.icons8.com/fluency-systems-regular/344/about.png' alt='homebtn' /></Link>
        <p className='border'></p>
        <Link to="/contact" className='link'>Contact <img className="cartbtn" src='https://img.icons8.com/external-outline-wichaiwi/344/external-contact-business-outline-wichaiwi.png' alt='homebtn' /></Link>
        <p className='border'></p>
        <Link to="/login" className='link'>My<img className="cartbtn" src='https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/external-Log-in-social-media-bearicons-detailed-outline-bearicons.png' alt='homebtn' /></Link>
        <p className='border'></p>
        <Link to="/cart" className="link cart"><img className="cartbtn" src={cart} alt="cartbt"/>{totalArticles}</Link>
 
       
        </nav>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
       
        </Routes>
      </Router>
      
  <Bottom />
    </div>
  );
}
gsap.from(".link", {opacity:0, duration:1, stagger:1 })
export default App;

