import React from "react";
import Card from "../card/Card"
import { Link } from "react-router-dom";
import "./homepage.css"
// import { useState } from "react";
import phoneList from "./phoneList";


// import Navbar from "../Components/Navbar";
// import Card from "../Components/Card";

const Homepage = () =>{
 const handleClick = (id) =>{
console.log(id)
const clicked= phoneList.find((e)=>e.id===id)
 }

    return (
     
      <div className="home-container">

        <div className="home-img">
            <img src="https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="100%"/>
            <button><Link to="/products" style={{color:"white", textDecoration:"none"}}>EXPLORE PRODUCTS</Link></button>
        </div>
        <div className="home-head">
            <div className="product-head"><b>FEATURED PRODUCTS</b></div>
            <div className="product-details">
                    
                    {phoneList.map((list)=>{ 
                       return (
                       <Card
                       key={list.id}
                       name={list.name}
                       desc={list.desc}
                       img={list.img}
                       price={list.price}
                       cb={handleClick}
                       />)
                    }
                    )}
            </div>       
             </div>
            
        </div>
       
    )
}
export default Homepage;