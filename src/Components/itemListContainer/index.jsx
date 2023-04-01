import { useEffect, useState } from "react"
import ItemList from "../itemList";

function Contenedor({marca,isRoute}) {
    const [bike,setBike]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')

        if (isRoute) {
            const bike = query(itemsCollection, where('marca', '==' , marca))
            
            getDocs(bike)
            .then((snapshot)=>{
                const docs = snapshot.docs
                setProducts(docs.map((doc)=>({id:doc.id, ...doc.data()} )))

            }).catch((error)=>console.log(error))
        }
        else{
            getDocs(itemsCollection)
            .then((snapshot)=>{
                const docs = snapshot.docs
                    setProducts(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
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