import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import ItemCount from "./ItemCount";

function ItemDetail({ id, nombre, precio, img, idCat, descripcion, stock }) {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarAlCarrito } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {


        setAgregarCantidad(cantidad);
        agregarAlCarrito(id, nombre, Number(precio), Number(cantidad));

    };

    return (
        <div className="contenedorItem">
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
            <p>ID: {id}</p>
            <p>IdCat: {idCat}</p>
            <p>Stock: {stock}</p>
            {agregarCantidad > 0 ? (
                <Link to="/cart">Terminar Compra</Link>
            ) : (
                <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            )}
        </div>
    );
}

export default ItemDetail;
