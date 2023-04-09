import React from "react";
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsGithub,BsWhatsapp,BsLink} from "react-icons/bs";
import { SiGooglemaps} from "react-icons/si";
import logo from '/assets/img/fondo-logo.jpg'
export default function footer(){
    return (
        <div>
            <footer className="bg-white text-center text-gray-900">
            <div className="container px-6 pt-6"> 
                <div className="mb-6 flex justify-center">
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsFacebook className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
                
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsInstagram className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
                
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsTwitter className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
            
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsLinkedin className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
            
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsGithub className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
                
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsWhatsapp className="m-1 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>

                <div>
                </div>
                <form action="">
                    <div
                    className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                    <div className="md:mb-6 md:ml-auto">
                        <p className="">
                        <strong>Suscríbete a nuestro Newsletter</strong>
                        </p>
                    </div>

                    
                    <div className="relative md:mb-6" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email address" />
                        <label
                        for="exampleFormControlInput1"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Email...
                        </label>
                    </div>
                    <div className="mb-6 md:mr-auto">
                        <button
                        type="submit"
                        className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Subscribirse
                        </button>
                    </div>
                    </div>
                </form>
                </div>


                <div className="mb-6">
                <p>
                Contamos con una amplia variedad de modelos de bicicletas y marcas, así como accesorios, repuestos e indumentaria. Contamos con un moderno taller operado por técnicos certificados por Shimano para garantizarte un excelente servicio y atención. Más de 15 años compartiendo la misma pasión!
                </p>
                </div>

                
                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-6">
                    <h5 className="mb-2.5 font-bold uppercase">BIKESHOP</h5>
                    <img classNamw="w-30"src={logo}/>

                </div>

                <div className="mb-6">
                    <h5 className="mb-2.5 font-bold uppercase">Companía</h5>

                    <ul className="mb-0 list-none">
                    <li>
                        <a href="#!" className="text-indigo-500">Nuestro Servicios</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500">Politica y Privacidad</a>
                    </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h5 className="mb-2.5 font-bold uppercase">Compra Online</h5>

                    <ul className="mb-0 list-none">
                    <li>
                        <a href="#!" className="text-indigo-500">Smart-watch</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500">Vestimenta</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500">Accesorios</a>
                    </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h5 className="mb-2.5 font-bold uppercase">Contacto</h5>

                    <ul className="mb-0 list-none">
                    <li>
                        <a href="#!" className="text-indigo-500"><SiGooglemaps/>Argentina- Mendoza</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500"><BsLink/>bikeshop@bikeshop.com.ar</a>
                    </li>
                    <li>
                        <a href="#!" className="text-indigo-500"><BsWhatsapp/>+54261XXXXXX</a>
                    </li>
                    </ul>
                </div>

                </div>
            </div>

        
            <div className="p-4 text-center" >
                © 2023 Copyright:
                <a className="text-white" href="ww.bikeshop.com.ar"
                >Tailwind Elements</a
                >
            </div>
            </footer>
    </div>
    )
}
