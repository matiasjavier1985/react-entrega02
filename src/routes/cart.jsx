import NavBar from "../Components/navBar"
import CartContainer from "../Components/cartContainer"
import { CartContextProvider } from "../context/CartContext"
import Footer from "../Components/footer"

export default function cart() {
    return (
        <CartContextProvider>
            <NavBar/>
                <CartContainer/>
            <Footer/>
        </CartContextProvider>
    )
}