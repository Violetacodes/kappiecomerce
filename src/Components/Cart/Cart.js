import { useSelector } from "react-redux";
import { getCartItems, getTotalArticles, getTotalPrice} from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cart from "./../ProductsComponents/cart.png";
import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalArticles = useSelector(getTotalArticles);

    const [showMyText, setShowMyText] = useState(false);
   
    return(
      
        <div className="big">
        <div className="small">
            <p className="bold">Cart <img className="cartbtn7" src={cart} alt="cartbt"/> | Total: $ {totalPrice}</p>
     {cartItems.map((cartItem, index)=> <CartItem cartItem={cartItem} key={index} />)}
   <p>Articles: {totalArticles}</p>
   <div>
    {showMyText ?  <StripeContainer /> : 
    <div>
     <button onClick={() => setShowMyText(true)} className="pay font">Checkout</button>
    </div>}
      
   </div>
     </div>
     <div>
     <img src="https://theglamandglitter.com/wp-content/uploads/2021/01/jewellery3.jpg" alt="imagee" width="500px" />
     </div>
  
        </div>
      
    )
}

export default Cart;