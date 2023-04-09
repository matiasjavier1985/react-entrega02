
import { useCartContext } from '../../context/CartContext'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function itemCart ({datos}){
    const {id,img,brand,cantidad,price,stock} = datos

    const{carrito,sumarCantidad,restarCantidad,eliminarbici,precioTotal}=useCartContext()
    const navigate = useNavigate();

  
    function restar() {
        if (carrito.length==1 && cantidad==1) {
            restarCantidad(datos)

            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
        else(restarCantidad(datos))
    }

    function eliminar() {
        if (carrito.length==1) {
            eliminarbici(datos)

            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
        else(eliminarbici(datos))
    }

    return(
        <>
        <div key={id} className={`flex flex-row bg-white p-4 rounded-lg shadow-md`}>
            <img className="w-28 h-28 object-contain mr-4" src={img} alt={`${brand}`}/>
            <div className="flex-1 border-l border-gray-300 pl-4">
                <h4 className="text-md font-medium mb-2">{brand}</h4>
                <p className="text-gray-500 text-sm ">{`Cantidad: ${cantidad}`}</p>
                <p className="text-gray-500 text-lg font-bold">{`$ ${price}`}</p>
                <div className='flex justify-between items-center'>
                    <div className="flex flex-row gap-5">
                        <button onClick={()=>sumarCantidad(datos)} className="hover:bg-green-200 hover:rounded-full p-1"><FaPlus /></button>
                        <button onClick={()=>restar()} className="hover:bg-red-200 hover:rounded-full p-1"><FaMinus /></button>
                    </div>
                    <button
                        onClick={()=>eliminar()}
                        type="button"
                        className="font-medium text-red-500 hover:text-red-700 hover:bg-red-200 hover:rounded-full p-1"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>{`$ ${precioTotal}`}</p>
                                                </div>
        </>
    )
}
