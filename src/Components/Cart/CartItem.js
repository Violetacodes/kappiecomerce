import dataProducts from "../../data/dataProducts";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
   const products = dataProducts.find(item => item.id === cartItem.productId)
   const dispatch = useDispatch(); 
   return(
        <div>
            <p><img className="cartpicture" src={`./${products.img}.jpg`} alt="pictura"/> {products.name} - {cartItem.quantity} <img onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} src="https://img.icons8.com/carbon-copy/344/filled-trash.png" width="20px" alt="icon" /></p>
            <p>$ {products.price * cartItem.quantity}</p>
        </div>
    )
}

export default CartItem;