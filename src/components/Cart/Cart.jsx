import { useContext } from "react";
import { CarritoContext } from "../../context/carritocontext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";



const Cart = () => {
    const { vaciarCarrito, carrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/productos">Ver Productos</Link>
            </>
        );
    }

    return (
        <div>
            {carrito.map(producto => {
                return (
                    <CartItem
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        cantidad={producto.cantidad}
                    />
                );
            })}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )

}

export default Cart

