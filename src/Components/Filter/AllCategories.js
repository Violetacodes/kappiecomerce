import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="blockthree">
            <h1 className="choose">Choose what suits you best</h1>
            <div className="block">
            {["rings", "earrings", "pendants", "bracelets", "all"].map(category => <Filter category={category} />)
            }
            </div>
          
         
        </div>
    )
}

export default AllCategories;