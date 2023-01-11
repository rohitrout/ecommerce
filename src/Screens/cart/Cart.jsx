import React from 'react'
import { useContext} from 'react';
import Cartcard from '../../Components/cartcard/Cartcard'
import "./cart.css"
import {CartContext} from './../../cart-context';

const Cart = () => {
  // const [ cart, setcart ] = useState([]);
  const {cartItems,removeFromCart} = useContext(CartContext)

  const cartItemElements = cartItems.map(item=>{
    return (
      <Cartcard key={item.id} name={item.name} img={item.img} desc={item.desc} price={item.price} handle={()=>removeFromCart(item.id)}/>
    )
  })

  const totalCost = cartItems.map(i=>i.price).reduce((acc,curr)=>parseInt(acc)+parseInt(curr),0)
  const grandTotal= totalCost + 18/100*totalCost
  console.log(grandTotal)

  return (
  <>
  <h1>Items in Cart {cartItems.length}</h1>
    <div className='cart-container'>
      <div className='cart-card'>
        
        {cartItemElements}
       {/* <Cartcard name="Hello" img="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703772/Croma%20Assets/Communication/Mobiles/Images/261939_harbr8.png/mxw_640,f_auto" desc="Vety Expentivjsave" price="67678"/> */}
      </div>
      <div className='cart-summary'>
        <div><h2>TOTAL PRICE : ₹{totalCost}</h2></div>
        <div><h2>TOTAL GST : `18%` </h2></div>
        <div><h1>GRAND TOTAL : ₹{grandTotal}</h1></div>
        <button>PAY NOW</button>

      </div>

    </div>
    </>
  )
}

export default Cart