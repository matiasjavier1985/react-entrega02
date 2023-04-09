import ItemDetail from "../itemDetail";
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore}from "firebase/firestore"
import { HashLoader } from "react-spinners"
function Contenedordetalle({idDetalle}) {
    const [bike,setBike]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemRef = doc(db,'items',idDetalle);

        getDoc(itemRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setBike({id:snapshot.id, ...snapshot.data()})
            }
        }).catch((error)=>console.log(error))
    },[])

    return(    
            <div className="mt-44 container-fluid">
            {bike.length!=0?<ItemDetail infoDetalle={bike}/>:
            <HashLoader className="mx-auto mt-28 mb-28" size={250}/>}
        </div>           
    )
}

export default Contenedordetalle