import React from "react";
import { useState } from "react";


const ItemCount = ({ inicial = 1, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(1)
    const incrementar = () => {
        if (contador < 10000000) {
            setContador(contador + 1)
        }
    }
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={() => funcionAgregar(contador)}>Agregar</button>
        </div>
    )
}
export default ItemCount
