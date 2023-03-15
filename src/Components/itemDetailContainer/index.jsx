import ItemDetail from "../itemDetail";
import { useEffect, useState } from "react"

function Contenedordetalle({idDetalle}) {
    const [bike,setBike]= useState([])

   useEffect(()=>{
    fetch("/mocks/bikes.json")
    .then((res)=> res.json())
    .then ((datos)=>{
        
        setTimeout(() => {
            
                const bikefilter = datos.find((prod)=>{
                    console.log(prod.id == idDetalle) 
                    return prod.id == idDetalle;})

                console.log(bikefilter);
                setBike(bikefilter)
            
        },2000);
 
    })
    
   },[])
   console.log(bike);
    return(
        <div className="mt-44 container-fluid">
            <ItemDetail infoDetalle={bike}/>
        </div>
       
    )
}

export default Contenedordetalle