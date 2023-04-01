import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './Components/routes/root'
import "./index.css"
import ItemRoot from "./Components/routes/item";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNfZk0yblzPQR1IogSDZrKWT8eAIqEIEY",
  authDomain: "bikeshop-95f40.firebaseapp.com",
  projectId: "bikeshop-95f40",
  storageBucket: "bikeshop-95f40.appspot.com",
  messagingSenderId: "141154442154",
  appId: "1:141154442154:web:d458c6ee8dfb31207569d3",
  measurementId: "G-CQCSVF0NS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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

