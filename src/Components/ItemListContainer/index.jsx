import { useEffect, useState } from "react"
import ItemList from "../itemList";

function Contenedor({marca,isRoute}) {
    const [bike,setBike]= useState([])

   useEffect(()=>{
    fetch("/mocks/bikes.json")
    .then((res)=> res.json())
    .then ((datos)=>{
        
        setTimeout(() => {
            
            if (isRoute){
                const bikefilter = datos.filter((prod)=>{
                    console.log(prod.brand == marca) 
                    return prod.brand == marca;})

                setBike(bikefilter)
            }else{setBike(datos)}
        },2000);
    })
   },[])

    return(
        <div className="mt-44"><p>oooooooo</p>

            <ItemList info={bike}/>
        </div>
       
    )
}

export default Contenedor