import React from 'react';
import { 
  createBrowserRouter
} from "react-router-dom";
import Cart  from './Views/Cart';
import  "./index.jsx"
import {ButtonsLogin}  from "./App"
import KitchenApp from './Views/Kitchen';


const router = createBrowserRouter([
    {
      path: "/",
      element: <ButtonsLogin />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },

    {
        path: "/kitchen",
        element: <KitchenApp />,
      },
  ]);
  
  export default router;