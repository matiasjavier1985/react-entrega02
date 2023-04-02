import ItemDetail from "../itemDetail";
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore}from "firebase/firestore"

function Contenedordetalle({idDetalle}) {
    const [bike,setBike]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db,'items',idDetalle);

        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setBike({id:snapshot.id, ...snapshot.data()})
                console.log(snapshot.data());
            }
        }).catch((error)=>console.log(error))
    },[])
   console.log(bike);
    return(    
            <div className="mt-44 container-fluid">
            <ItemDetail infoDetalle={bike}/>
        </div>           
    )
}

export default Contenedordetalle