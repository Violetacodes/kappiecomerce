import { useSelector } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { getSelectedCategory } from "../../redux/productsSlice";
import Product from "./Product";


const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(

        <div className="blocktwo">
           {dataProducts
           .filter(product => {
               if (selectedCategory === "all") return true;
               return selectedCategory === product.category;
           })
           .map((element, index) => <Product element ={element} key={element.id} /> 
              
           )}
        </div>
        
)}

export default Products;