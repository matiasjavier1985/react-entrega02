import CartWidget from '../cartWidget';
import { Fragment, useEffect, useState } from 'react'
import { Dialog,Menu,Transition  } from '@headlessui/react'
import { HiOutlineMenu,HiOutlineX,HiHome} from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import logo from '/assets/img/fondo-logo.jpg'

export default function navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [verNav,setVerNav]=useState("show")
    const [buscar,setBuscar]=useState('')
    const [categorias,setCategorias]=useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db,'caterogy')
            getDocs(itemsCollection)
            .then((snapshot)=>{
                const docs = snapshot.docs
                    setCategorias(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
            }).catch((error)=>console.log(error))
        
   },[])

    const handleChange = (event) => {
        setBuscar(event.target.value);
    }

    let scrollPosc = window.pageYOffset;

    useEffect(()=>{
        window.onscroll = function() {
            let actualScrollPosc = window.pageYOffset;
            if (scrollPosc > actualScrollPosc) {
                setVerNav("show")
            } else {
                setVerNav("hidden")
            }
            scrollPosc = actualScrollPosc
        } 
    },[])

    return (
    <div className={`isolate bg-white  fixed inset-x-0 top-0 ${verNav} z-10`}>
        <div className=" from-purple-900 px-6 py-3 lg:px-8 ">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to={'/'} className="-m-1.5 p-1.5">
                            <span className="sr-only">BIKESHOP</span>
                            <img className="w-16 overflow-hidden" src={logo} alt="BIKESHOP" /> 
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir Menu</span>
                        <HiOutlineMenu className="text-blue-100 h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* Opciones del nav */}

                <div className="hidden lg:flex lg:gap-x-12">
                    <CartWidget widget="block"/>
                    <NavLink to={'/'} className="uppercase text-sm font-semibold leading-6 text-gray-900">
                        Inicio
                    </NavLink>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="uppercase inline-flex text-sm font-semibold leading-6 text-gray-900">
                                Productos
                            </Menu.Button>
                            </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {categorias.map((bici)=>{
                                    return(
                                        <div key={bici.key} className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink to={`/category/${bici.marca}`}>
                                                        <button
                                                            className={`${
                                                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                        >
                                                        {bici.marca}
                                                        </button>
                                                    </NavLink>
                                                    
                                                )}
                                            </Menu.Item>
                                        </div>
                                    )
                                })}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    
                </div>   
            </nav>
            {/* Modo movil */}
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-3 lg:hidden">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">BIKESHOP</span>
                        <img className="w-[100px]" src={logo} alt="BIKESHOP" />
                    </a>
                    <CartWidget cantidad="9"/>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                        >
                        <span className="sr-only">Close menu</span>
                        <HiOutlineX className="text-blue-700 text-blue-500 h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="w-full space-y-2 py-6">
                        <NavLink to={'/'} className="-mx-3 flex rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 uppercase">
                                <HiHome className="text-blue-700 h-6 w-6 mr-2"/>
                                <p>Inicio</p>
                        </NavLink>
                        
                        <Menu as="div" className="w-full inline-block text-left">
                        <div className='w-full '>
                            <Menu.Button className="w-full py-3 rounded-lg inline-flex text-base font-semibold leading-7 text-gray-900 uppercase">
                                <p>Productos</p>
                            </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" w-56 origin-top-right divide-y divide-gray-400 rounded-md bg-transparent shadow-lg ring-2 ring-black ring-opacity-10 focus:outline-none">
                            {categorias.map((bici)=>{
                                    return(
                                        <div key={bici.key} className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink to={`/category/${bici.marca}`}>
                                                        <button
                                                            className={`${
                                                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}
                                                        >
                                                        {bici.marca}
                                                        </button>
                                                    </NavLink>
                                                    
                                                )}
                                            </Menu.Item>
                                        </div>
                                    )
                                })}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    </div>
                    </div>
                </div>
                </Dialog.Panel>
            </Dialog>
        </div>
        <hr className='border-gray-400'/>
    </div>
    )
}
