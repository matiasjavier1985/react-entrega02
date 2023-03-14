import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './Components/routes/root'
import "./index.css"
import ItemRoot from "./Components/routes/item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/category/:id",
    element: <Root/>,
  },
  {
    path: "/item/:id",
    element: <ItemRoot/>,
  },
  {
    path: "/cart",
    element: <div>HOLA MUNDO</div>,
  },
  {
    path: "/checkout",
    element: <div>HOLA MUNDO</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

