

function ItemDetail({ id, nombre, precio, img, idCat, descripcion }) {
    return (
        <div>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <p>Descripcion{ }</p>
            <p>ID{id}</p>
            <p>IdCat{idCat}</p>
        </div>
    );
}

export default ItemDetail;