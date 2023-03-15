import Item from "../item";
export default function itemList({info}) {
    return(
        <div>
            {info.map((productos)=>{
                return(
                    <Item key={productos.id} infoUnica={productos}/>
                )
            })}
        </div>
    )
}