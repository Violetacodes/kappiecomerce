import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        <div className="container">
         
            {!isAuthenticated &&( 
            <button onClick={() => loginWithRedirect()} className="login">Log in / Sign up</button>
            )}
            <Logout />
        
        </div>
        
    )
}

export default Login;