

import NavBar from "../Components/navBar"
import ItemListContainer from "../Components/itemListContainer"
import { useParams } from "react-router-dom"
import { CartContextProvider } from "../context/CartContext"
import Footer from '../components/footer'

function App() {
  const params = useParams()
  const isRoute = Boolean(params.id)

  return (
    <div>
       <CartContextProvider>
        <NavBar/>
        <ItemListContainer marca={params.id} isRoute={isRoute}/>
        <Footer/>
        </CartContextProvider>
    </div>
  )
}
export default App
