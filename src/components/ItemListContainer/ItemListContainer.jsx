import { useState, useEffect } from "react"
import { getProductos, getProductoPorCategoria } from "../../asycmocks"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { idCategoria } = useParams()
    useEffect(() => {
        const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}
export default ItemListContainer
