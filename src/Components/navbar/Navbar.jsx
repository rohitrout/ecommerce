import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../cart-context";
// import App from "../../App";
// import { Login, SignUp, Wishlist, Cart } from "../../Screens"
import './navbar.css';

const Navbar = () => {
    const {cartItems}=useContext(CartContext)
    return (
    <>
        <div className="nav">
        <div className="nav-logo"><Link to="/" style={{textDecoration:"none", color:"black"}}><h1>sToRe</h1></Link></div>
        <div className="nav-search">
            <input className="nav-search" type="text" placeholder=" 🔍 Search it out..."></input>
        </div>
        <div>
            <div className="nav-elements">   
            
                <div><Link to="/" style={{textDecoration:"none", color:"black"}}>Home </Link></div>
                <div><Link to="/signup" style={{textDecoration:"none", color:"black"}}>SignUp </Link></div>
                <div><Link to="/login" style={{textDecoration:"none", color:"black"}}>LogIn </Link></div>                
                <div><Link to="/wishlist" style={{textDecoration:"none", color:"black"}}>Wishlist </Link></div>
                <div><Link to="/cart" style={{textDecoration:"none", color:"black"}}>Cart ({cartItems.length})</Link></div>
           
            </div>
        </div>
    </div>
    </>
    )
}
export default Navbar;      