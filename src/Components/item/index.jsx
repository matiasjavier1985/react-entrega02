import { NavLink } from "react-router-dom"

export default function item({infoUnica}) {
    const {id,brand,model,price,img,stock}= infoUnica
    console.log(infoUnica);
    return (
        <NavLink to={`/item/${id}`} className="bg-gray-100 my-2 border">
          <div class="relative max-w-sm rounded overflow-hidden shadow-sm shadow-lg">
              <img class="w-full" src={img} alt={brand}/>
            <div className="p-2">
              <div class="font-bold text-xl mb-2">{brand}
            </div>
              <p class="text-gray-700 text-base">{model}</p>
              <p class="text-gray-700 text-base font-bold">Precio:💲{price}</p>
              <div className="absolute top-2 right-2 ">
                      {stock === 0 ? (
                          <span className="text-red-800 bg-red-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>) : (0 < stock && stock < 6) ? (
                          <span className="text-yellow-800 bg-yellow-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>) : (
                          <span className="text-green-800 bg-green-100 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium">{`${stock} en stock`}</span>
                      )}
              </div>
            </div>
        </div>
          </NavLink>
    )
}