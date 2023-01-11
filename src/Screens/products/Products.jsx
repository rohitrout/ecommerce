import React, { useContext } from 'react'
import "./products.css";
import phoneList from '../../Components/homepage/phoneList';
import { Card } from '../../Components';
import { CartContext } from '../../cart-context';

const Products = () => {

  const {addToCart} = useContext(CartContext)

  const itemElements =  phoneList.map((list)=>{
    return (<Card key={list.id} name={list.name}
    desc={list.desc}
    img={list.img}
    price={list.price} 
    handler={()=>addToCart(list)}
  />)})
  
  // const [cart, setCart] = useState;
  // console.log(cart)
  // const [data, setData] = useState(phoneList)

//   useEffect=(()=>{
//    if(checked){
// const filtered = data.filter((e)=>e.category===che)
// setData(filtered)

//    }else{
//     setData(phoneList)
//    }
//   },[checked])
  return (
    
    <div className="product-home-container">
      <div className="product-home-head">
          <div className="pproduct-head"><b>TOP BEST SELLING PRODUCTS</b></div>
          <div className="pproduct-sub-head">
            <div><input type="checkbox" id="check1" ></input>Mobiles</div>
            <div><input type="checkbox"></input>Laptops</div>
            <div><input type="checkbox"></input>Tablets</div>
            <div><input type="checkbox"></input>Kuch bhi</div>
          </div>
          <div className="pproduct-details">
                  
                  {/* {allItems.map((list)=>{
                     return (
                     <Card
                     key={list.id}
                     name={list.title}
                     desc={list.category}
                     img={list.image}
                     price={list.price}
                    //  handler={addToCart}
                    //  cartDetails={setCart}
                     
                     />)
                  }
                  )} */}
                  {itemElements}
          </div> 

          {/* if(check1.isSelected && phoneList.filter((list)=>list.category==="mobile") )
          {
            
          } */}
    
           </div>
          
      </div>
     
  )
}

export default Products