import { useEffect, useState } from "react"
import ItemList from "../itemList";
import { HashLoader } from "react-spinners"
import { collection, getDocs, getFirestore, query, where }from "firebase/firestore"
function Contenedor({marca,isRoute}) {
    const [bike,setBike]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')

        if (isRoute) {
            const q = query(itemsCollection, where('brand', '==' , marca))
            
            getDocs(q)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setBike(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
                console.log(docs);

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
            {bike.length!=0?<ItemList info={bike}/>:
            <HashLoader className="mx-auto mt-28 mb-28" size={250}/>}
           
        </div>
       
    )
}

export default Contenedor