

import NavBar from "../navBar"
import ItemListContainer from "../itemListContainer"
import { useParams } from "react-router-dom"

function App() {
  const params = useParams()
  const isRoute = Boolean(params.id)

  return (
    <div>
        <NavBar/>
        <ItemListContainer marca={params.id} isRoute={isRoute}/>
        
    </div>
  )
}
export default App
