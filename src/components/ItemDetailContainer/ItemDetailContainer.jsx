import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getUnProducto } from "../../Asycmocks";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { idProducto } = useParams()

    useEffect(() => {
        getUnProducto(Number(idProducto))
            .then(res => setProducto(res))
    }, [idProducto])
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Detalle del Producto</h2>
            {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
        </div>
    )
}
export default ItemDetailContainer