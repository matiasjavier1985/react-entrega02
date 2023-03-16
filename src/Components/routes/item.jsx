import NavBar from "../navBar"
import Contenedordetalle from "../itemDetailContainer"
import { useParams } from "react-router-dom"
function Item() {
  const params = useParams()
  return (
    <div>
        <NavBar/>
        <Contenedordetalle idDetalle={params.id}/>
    </div>
  )
}
export default Item