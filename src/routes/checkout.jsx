import NavBar from "../Components/navBar"
import { CartContextProvider } from "../context/CartContext"
import Footer from "../Components/footer"
import CheckoutContainer from "../Components/checkoutContainer"
export default function checkout() {
  
  return (
    
      <CartContextProvider>
        <NavBar/>
        <CheckoutContainer/>
        <Footer/>  
      </CartContextProvider>
  )
}