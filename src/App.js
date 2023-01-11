
import './styles.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Navbar, Footer, Homepage } from "./Components"
// import Homepage from "./Components/homepage/Homepage";
// // import SignUp from './Screens/signup/SignUp';
// import Cart from './Screens/cart/Cart';
import {Login,Wishlist,Cart,SignUp,Products} from "./Screens";


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/products",
        element:<Products/>
      }
    ]
  }
]);

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   {/* <Homepage/> */}
    //   {/* <SignUp/> */}      
    //   <Footer/>       
    // </div>
    <>
   
    <RouterProvider router={router}/>
    
    </>
     
  );
}

export default App;
