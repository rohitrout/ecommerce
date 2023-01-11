import React from "react";
import "./card.css"
// import { useContext } from "react";
// import { CartContext } from "../../cart-context";

const Card = (props) => {
  // console.log(props)
// const {addToCart} = useContext(CartContext)


    return (
        <div className="card">
        <div className="card-top">
              <h2 className="card-name">{props.name}</h2>
              <img className="card-img" alt="alt" src={props.img}></img>	
              </div>
        <div className="card-bottom">
                  <div className="info"><h3><span id="strike">₹56,987</span> ₹{props.price}</h3></div>
                  <div className="info">{props.desc}</div>
                  <div className="card-button">
                    <div><button className="buy-btn" onClick={props.handler}>BUY NOW</button></div>
                    <div><button className="buy-btn">ADD TO CART</button></div></div>
              </div>
      </div>
    )
}
export default Card;