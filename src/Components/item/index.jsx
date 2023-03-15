import { NavLink } from "react-router-dom"

export default function item({infoUnica}) {
    const {id,brand,model,price,img}= infoUnica
    return (
        <NavLink to={`/item/${id}`}>
          <h1>{brand}</h1>
          <h2>{model}</h2>
          <h2>{price}</h2>
          <img src={img} alt="BICIS"/>
          </NavLink>
    )
}