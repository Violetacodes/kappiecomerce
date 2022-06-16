import { useSelector } from "react-redux";
import { getCartItems, getTotalArticles, getTotalPrice} from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cart from "./../ProductsComponents/cart.png";

const Cart = () => {


    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalArticles = useSelector(getTotalArticles);

   
    return(
      
        <div className="big">
        <div className="small">
            <p className="bold">Cart <img className="cartbtn7" src={cart} alt="cartbt"/> | Total: $ {totalPrice}</p>
     {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
   <p>Articles: {totalArticles}</p>
     </div>
     <div>
     <img src="https://theglamandglitter.com/wp-content/uploads/2021/01/jewellery3.jpg" alt="imagee" width="500px" />
     </div>
        </div>
    )
}

export default Cart;