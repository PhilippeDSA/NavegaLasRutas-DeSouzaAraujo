import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({ id, nombre, categoria, precio, img, idCat }) => {
    return (
        <div className="cardProducto">
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Categoría: {categoria}</p>
            <p>idCat: {idCat}</p>
            <Link to={`/producto/${id}`}>
                <button>Ver Detalles</button>
            </Link>
            <p>id{id}</p>
        </div >
    )
}

export default Item
