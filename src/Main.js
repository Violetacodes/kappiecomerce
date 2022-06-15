import AllCategories from "./Components/Filter/AllCategories";
import Products from "./Components/ProductsComponents/Products";

const Main = () => {
    return(
<div>
<div>
      <AllCategories/>
      </div>  
      <div className='block'>
      <Products />  
      </div>
</div>
    )
}

export default Main;