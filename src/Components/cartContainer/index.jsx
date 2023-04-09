import CartList from "../cartList";
import { HashLoader } from "react-spinners"
import { useCartContext } from "../../context/CartContext";
export default function cartContainer (){

    const {carrito}=useCartContext()
    return(
        <main className="bg-gray-100 container-fluid pb-8 pt-16 lg:pt-32 flex-grow">
            { carrito.length!=0?<CartList productos={carrito} btn={'show'}/>:
            <HashLoader className="mx-auto mt-28 mb-28" size={250}/>}
        </main>
    )
}