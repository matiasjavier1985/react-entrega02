import BarraNav from '../components/navBar'
import CheckoutContainer from '../components/checkoutContainer'
import PiePag from '../components/footer'
import { CartContextProvider } from '../context/CartContext'
import { ProdContextProvider } from '../context/ProdContext'

import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function checkout() {
  const {pathname}=useLocation()

  useEffect(()=>{
      window.scrollTo(0,0)
  },[pathname])

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <BarraNav/>
        <CheckoutContainer/>  
      </CartContextProvider>
    </ProdContextProvider>
  )
}