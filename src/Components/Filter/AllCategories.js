import Filter from "./Filter";
import jew from './jew.jpeg'

const AllCategories = () => {
    return(
        <div>
            <div className="container">
                <img src={jew} alt="jewelery main" width="100%" height="90%"/>
                <div className="absolute">
                <p className="express">Express yourself with Kappie </p>
                <a className="all" href= "#down">See all products</a>
                </div>
      
            </div>
       <section id="down">
        <div className="blockthree">
            <h1 className="choose">Choose what suits you best</h1>
            <div className="block">
            {["rings", "earrings", "pendants", "bracelets", "all"].map(category => <Filter category={category} />)
            }
            </div>
        </div>
        </section>
        </div>
    )
}

export default AllCategories;