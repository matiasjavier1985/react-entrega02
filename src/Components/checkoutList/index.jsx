import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import {useNavigate } from 'react-router-dom';

import CartList from '../cartList';

export default function CheckoutList({ carrito }) {

  const {enviarOrden}=useCartContext()
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }
    if (email !== confirmEmail) {
      alert('Los correos electrónicos no coinciden.');
      return;
    }

    enviarOrden(formData)

    setTimeout(() => {
        navigate('/');
    }, 3000);
  };

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    direccion: "",
    telefono: "",
    email: "",
  });
  
  const handleChange = (e) => {
    setFormData((prevState) => ({...prevState,[e.target.id]: e.target.value}))

    if(e.target.id=='email'){setEmail(e.target.value)}
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-wrap -mx-4 -mb-8">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-medium mb-4">Información de envío</h2>
          <form onSubmit={handleSubmit} className='bg-white p-5 rounded-lg shadow-xl'>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="nombreCompleto">
                Nombre completo
              </label>
              <input
                className="shadow-xl appearance-none border-2 focus:border-indigo-400-2 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombreCompleto"
                type="text"
                placeholder="Nombre completo"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="telefono">
                Número de teléfono
              </label>
              <input
                className="shadow-xl appearance-none border-2 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                type="tel"
                placeholder="Número de teléfono"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="shadow-xl appearance-none border-2 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmEmail">
                Confirmar correo electrónico
              </label>
              <input
                className="shadow-xl appearance-none border-2 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmEmail"
                type="email"
                placeholder="Confirmar correo electrónico"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="direccion">
                Dirección de envío
              </label>
              <textarea
                className="shadow-xl appearance-none border-2 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="direccion"
                placeholder="Dirección de envío"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-medium mb-4">Resumen del pedido</h2>
          <CartList productos={carrito} btn={'hidden'}/>
        </div>
      </div>
    </div>
  );
};