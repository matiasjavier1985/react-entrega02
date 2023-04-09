import { StarIcon } from '@heroicons/react/20/solid'
import { useCartContext} from "../../context/CartContext";
const product = {
 
  highlights: [
    
    'Compra con confianza 800+ reseñas: 4.5 de 5',
    'Garantía precio bajo inmediato por chat',
    'Devoluciones Gratis hasta 30 días',
    'Envío Gratis en compras desde $1,000',
  ],
  details:
    'Si tienes alguna pregunta sobre productos o tú compra, visita nuestra página de servicio al cliente. Aquí encontraras los detalles de nuestra empresa, respuestas a las preguntas más frecuentes y diferentes formas de ponerse en contacto con nosotros',
}
const reviews = { href: '#', average:4, totalCount: 120 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function itemDetail({infoDetalle}) {
  const {id,brand,model,price,img,description,rolled}= infoDetalle

  const {agregarBike} = useCartContext()

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li key={id}>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                    {brand}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {model}          
              </a>
            </li>
          </ol>
        </nav>
        {/* Product info */}
        <div className="bg-white  mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {/* Image gallery */}
            <div className="sm:px-6 lg:max-w-7xl lg:col-span-2 lg:px-8">
          
                    <h1 className="text-2xl font-bold tracking-tight text-green-500 sm:text-3xl">{brand}</h1>
                    <h2 className="text-xl tracking-tight text-gray-600 sm:text-3xl">{model}-{rolled}</h2>
                
                <div className=" m-5 hidden overflow-hidden rounded-sm lg:block w-64">
                    <img
                    src={img}
                    alt={model}
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                <div>
                <div>
                  <p className=" m-4 text-sm text-gray-600">{description}</p>
                </div>
            </div>
            </div>

          {/* Options */}
          <div className=" mt-4 lg:row-span-3 lg:mt-0 lg:col-span-2 lg:col-start-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">💲{price} Pesos</p>
            {/* Reviews */}Caracteristicas
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-10">
              <button onClick={()=>agregarBike(infoDetalle)} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Comprar
              </button>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-blue-900">Características</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-blue-900">Más Información</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
            
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only"></h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
