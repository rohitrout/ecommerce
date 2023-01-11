import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
// import Homepage from './Pages/Homepage';
import { CartProvider } from './cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CartProvider >
     <App />
   </CartProvider>
  </React.StrictMode>
);


