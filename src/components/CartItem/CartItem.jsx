import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ id, nombre, cantidad, precio }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: ${precio}</p>
            <button onClick={() => eliminarProducto(id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
