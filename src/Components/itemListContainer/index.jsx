import { useEffect, useState } from "react"
import ItemList from "../itemList";
import { collection, getDocs, getFirestore, query, where }from "firebase/firestore"
function Contenedor({marca,isRoute}) {
    const [bike,setBike]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')

        if (isRoute) {
            const q = query(itemsCollection, where('marca', '==' , marca))
            
            getDocs(q)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setBike(docs.map((doc)=>({id:doc.id, ...doc.data()} )))

            }).catch((error)=>console.log(error))
        }
        else{
            getDocs(itemsCollection)
            .then((snapshot)=>{
                const docs = snapshot.docs
                    setBike(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
            }).catch((error)=>console.log(error))
        }
   },[marca])

    return(
        <div className="container-fluid mt-44">
           <ItemList info={bike}/>
        </div>
       
    )
}

export default Contenedor