import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productsSlice";
const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div className="block words">
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? "categoryButtonSelected" : "categoryButton" }>{category}</p>  
        </div>
    )
}

export default Filter;