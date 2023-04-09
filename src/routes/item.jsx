import NavBar from "../Components/navBar"
import Contenedordetalle from "../Components/itemDetailContainer"
import { useParams } from "react-router-dom"
import { CartContextProvider } from "../context/CartContext"
import Footer from "../Components/footer"
function Item() {
  const params = useParams()
  return (
    <div>
        <CartContextProvider>
        <NavBar/>
        <Contenedordetalle idDetalle={params.id}/>
        <Footer/>
        </CartContextProvider>
        
    </div>
  )
}
export default Item