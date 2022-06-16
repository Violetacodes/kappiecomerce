import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import cart from "./cart.png";

export const Product = ({element}) => {
    const[quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()
    return(
        <div className="product-card">
<div>
<img className="imgimg" src={`./${element.img}.jpg`} alt="pictura"/>
<div className="blockthree">
    <div className="btn">
    <ChangeQuantity quantity= {quantity} setQuantity={setQuantity}/>
    </div>
    <button onClick={() => {dispatch(addItemToCart({element, quantity}))}}><img className="cartbtn" src={cart} alt="cartbt"/></button>
   
<h2>{element.name}</h2>
<span>{element.description}</span>
<p>$ {element.price}</p>

</div>
</div>
        </div>
    )
}

export default Product;