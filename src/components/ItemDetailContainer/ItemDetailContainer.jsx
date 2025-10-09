import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { db } from "../../services/config"
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { idProducto } = useParams()
    useEffect(() => {
        const nuevoDoc = doc(db, "productos", idProducto)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                if (data) {
                    const nuevoProducto = { id: res.id, ...data }
                    setProducto(nuevoProducto)
                } else {
                    console.log("Producto no encontrado")
                }
            })
            .catch(error => console.log("Error al obtener el producto", error))
    }, [idProducto])
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Detalle del Producto</h2>
            {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
        </div>
    )
}
export default ItemDetailContainer