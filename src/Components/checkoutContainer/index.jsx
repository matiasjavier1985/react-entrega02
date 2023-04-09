import CheckoutList from "../checkoutList"
import { HashLoader } from "react-spinners"
import { useCartContext } from "../../context/CartContext"

export default function checkoutContainer (){

    const {carrito}=useCartContext()
    return(
        <main className="bg-gradient-to-b from-primario-200 to-primario-100 container-fluid pb-8 pt-16 lg:pt-32">
            { carrito.length!=0?<CheckoutList carrito={carrito}/>:
            <HashLoader className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}