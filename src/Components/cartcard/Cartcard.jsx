import React from 'react'
import "./cartcard.css"
import { useState } from 'react';

const Cartcard = (props) => {
  const [count,setCount] = useState(1)
  return (
    <div className="cart-carde">
            <div className="cart-carde-top">
              <h2 className="cart-carde-name">{props.name}</h2>
              <img className="cart-carde-img" alt="alt" src={props.img}></img>	
            </div>
            <div className="cart-carde-bottom">
                  <div className="info"><h3><span id="strike">₹56,987</span> ₹{props.price}</h3></div>
                  <div className="info">{props.desc}</div>
                  <div className="cart-carde-button">
                    <div><button className="cart-buy-btn" onClick={()=>setCount(count-1)}>-</button></div><h3>{count}</h3>
                    <div><button className="cart-buy-btn" onClick={()=>setCount(count+1)}>+</button></div>
                    <div><button className="cart-buy-btn" onClick={props.handle}>❌</button></div>
                  </div>
            </div>
      </div>

  )
}

export default Cartcard