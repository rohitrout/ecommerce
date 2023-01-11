import { createContext } from "react";
import { useState, } from "react";

const CartContext = createContext();

const CartProvider=({children})=>{

  // const [ allItems, setAllItems ] = useState([]) 
  const [ cartItems, setCartItems ] = useState([]); 

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products/")
  //       .then(response=>response.json())
  //       .then(data=>setAllItems(data))
  // },[])

  // console.log(allItems)
    const addToCart=(newItem)=>{
        setCartItems((prevItems) => [...prevItems, newItem]) 
      }
      console.log(cartItems)

    const removeFromCart=(id)=>{
      setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    
    
    return <CartContext.Provider value={{ cartItems , addToCart , removeFromCart }}>
        { children }
        </CartContext.Provider>
}

export {CartContext, CartProvider};