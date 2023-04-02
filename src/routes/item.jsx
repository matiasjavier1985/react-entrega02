import NavBar from "../Components/navBar"
import Contenedordetalle from "../Components/itemDetailContainer"
import { useParams } from "react-router-dom"
import { CartContextProvider } from "../context/CartContext"
function Item() {
  const params = useParams()
  return (
    <div>
        <CartContextProvider>
        <NavBar/>
        <Contenedordetalle idDetalle={params.id}/>
        </CartContextProvider>
        
    </div>
  )
}
export default Item