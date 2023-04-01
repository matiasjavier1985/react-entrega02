import { NavLink } from "react-router-dom"

export default function item({infoUnica}) {
    const {id,brand,model,price,img}= infoUnica
    return (
        <NavLink to={`/item/${id}`} className="bg-gray-300 my-2 border">
          <div class="max-w-sm rounded overflow-hidden shadow-sm shadow-lg">
          <img class="w-full" src={img} alt={brand}/>
          <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{brand}</div>
          <p class="text-gray-700 text-base">{model}</p>
          <p class="text-gray-700 text-base font-bold">Precio:💲{price}</p>
          </div>
          <div class="px-6 pt-4 pb-2 text-center">
          <span class="inline-block bg-gray-200 rounded-full shadow-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bikeshop</span>
          </div>
        </div>
          </NavLink>
    )
}