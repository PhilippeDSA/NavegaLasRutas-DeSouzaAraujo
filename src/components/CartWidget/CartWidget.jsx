import React, { useContext } from 'react'
import { CarritoContext } from '../../context/carritocontext'
import { Link } from 'react-router-dom'
import "./CartWidget.css"
const CartWidget = () => {
    const ImgCarrito = "https://media.istockphoto.com/id/1206806317/es/vector/icono-del-carrito-de-compras-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=sdScWRH_AeHdG6vHzMn8xUHCpe7iM6O1Skgi2lPuKG0="
    const { cantidadTotal } = useContext(CarritoContext)

    return (
        <div>
            <Link to="/cart">




                <img className='ImgCarrito' src={ImgCarrito} alt="Imagen de carrito de compras" />
                {cantidadTotal > 0 && < strong > {cantidadTotal}</strong>
                }
            </Link>
        </div >
    )
}
