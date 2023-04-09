import React from "react";
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsGithub,BsWhatsapp,BsLink} from "react-icons/bs";
import { SiGooglemaps} from "react-icons/si";
import wallpaper01 from '/assets/img/wallpaper01.jpg'
export default function footer(){
    return (
        <div>
            <footer className="bg-gradient-to-b from-purple-400 to-indigo-400 text-center text-gray-900 shadow">
            <div className="container"> 
                <div className="flex justify-center">
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsFacebook className="mt-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>    
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsInstagram className="m-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>         
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsTwitter className="m-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>     
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsLinkedin className="m-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
            
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsGithub className="m-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
                
                <a href="#!" type="button" data-te-ripple-init data-te-ripple-color="light">
                 <BsWhatsapp className="m-4 h-6 w-6 items-center justify-center align-center outline-none focus:outline-none"/>
                </a>
                <div>
                </div>
                </div>
                <div className="mb-6">
                <p>
                Contamos con una amplia variedad de modelos de bicicletas y marcas, así como accesorios, repuestos e indumentaria. Contamos con un moderno taller operado por técnicos certificados por Shimano para garantizarte un excelente servicio y atención. Más de 15 años compartiendo la misma pasión!
                </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="mb-6">
                    <img className="ml-16 w-48 rounded-md border"src={wallpaper01}/>

                </div>

                <div className="mb-6">
                    <h5 className="mb-2.5 font-bold uppercase">Companía</h5>

                    <ul className="mb-0 list-none">
                    <li>
                        <a href="#!" className="text-white">Nuestro Servicios</a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">Politica y Privacidad</a>
                    </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h5 className="m font-bold uppercase">Compra Online</h5>

                    <ul className="mb-0 list-none">
                    <li>
                        <a href="#!" className="text-white">Smart-watch</a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">Vestimenta</a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">Accesorios</a>
                    </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h5 className="font-bold uppercase ">Contacto</h5>
                    <ul className="list-none">
                        <li>
                            <a href="#!" className="text-white">Argentina- Mendoza</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">bikeshop@bikeshop.com.ar</a>
                        </li>
                        <li>
                            <a href="#!" className="text-white">+54261XXXXXX</a>
                        </li>
                    </ul>
                </div>

                </div>
            </div>
            <div className="p-4 text-center" >
                <a className="text-white" href="#">www.bikeshop.com.ar</a>
                <p> © 2023 Copyright</p>
            </div>
            </footer>
    </div>
    )
}
