import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () =>useContext(CartContext);

export function CartContextProvider({children}) {
    const [carrito,setCarrito]=useState(() => {
        const datos = localStorage.getItem('carrito');
        return datos ? JSON.parse(datos) : []})
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);
    const agregarBike=(bici,cantidad)=>{
        if (cantidad==null) {
            cantidad=1
        }
        let indice = carrito.findIndex((elemento)=>elemento.id === bici.id)

        if(indice!==-1){
            if (carrito[indice].cantidad<carrito[indice].stock) {
                const actualizarCarrito = [...carrito];
                actualizarCarrito[indice].cantidad += cantidad;
                setCarrito(actualizarCarrito)
            }
            else{
                console.log("no hay stock");
            }
        } 
        else {
            const nuevabici = {cantidad, ...bici}
            setCarrito([...carrito, nuevabici]);
        }
    };

    const sumarCantidad = (bici) => agregarBike(bici, 1);
    const restarCantidad = (bici) => {
        let indice = carrito.findIndex((elemento)=>elemento.id === bici.id)
        const cantidadActual = carrito[indice].cantidad
        if (cantidadActual === 1) {
            const actualizarCarrito = carrito.filter((el) => el.id !== bici.id);
            setCarrito(actualizarCarrito);
        } else {
            const actualizarCarrito = [...carrito];
            actualizarCarrito[indice].cantidad -= 1;
            setCarrito(actualizarCarrito);
        }
    }

    const eliminarbici = (bici)=>{
        const eliminarbici=carrito.filter((buscar)=>buscar.id !== bici.id)
        return setCarrito(eliminarbici)
    };

    const vaciarCarrito = ()=>{setCarrito([])};

    let contador = carrito.reduce((acumulador,elemento)=>acumulador + (elemento.cantidad),0)

    let precioTotal= carrito.reduce((acumulador,elemento)=>acumulador + (elemento.price * elemento.cantidad),0)

    return <CartContext.Provider 
    value={{
        agregarBike,
        eliminarbici,
        vaciarCarrito,
        precioTotal,
        carrito,
        contador,
        sumarCantidad,
        restarCantidad,
        }}>
            
        {children}
    </CartContext.Provider>
};