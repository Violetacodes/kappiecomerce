import { useAuth0 } from "@auth0/auth0-react";
const Secret = () => {
    const { isAuthenticated } = useAuth0();
    return(
        <div>
         
            <div className="display">
        {isAuthenticated && (
           <div>
            <h2 className="woow">WOOOOOW! Your PROMO CODE for today is 30% OFF for all rings! </h2>
           <h3>With MyKappie log in you can </h3>
        <p> - track your order ๐</p>
        <p>- get your receipt ๐งพ</p>
        <p>- request a refund ๐ฐ</p>
        <p>- find your community of jewelry lovers ๐</p> 
        <p>- unlock all gifts and presents ๐</p>  
        <img src="https://www.jensenjewelers.com/wp-content/uploads/70-OFF-1024x535.jpg" width="400px"alt="gift" /> 
        </div>)}
        </div>
        </div>
    )
}

export default Secret;