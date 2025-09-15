

export const misProductos = [
    {
        id: 1,
        nombre: "Palta verde",
        categoria: "palta",
        precio: 3000,
        img: "/img/palte.jpeg",
        idCat: "palta",
        descripcion: "Esta es una palta verde, que le falta maduración!(Consejo en el sol madura mas rapido☺)"
    },
    {
        id: 2,
        nombre: "Guacamole Picante",
        categoria: "Guacamole",
        precio: 2500,
        img: "/img/guacpic.jpeg",
        idCat: "guacamole",
        descripcion: "Este es un guacamole preparado especialmente para aquellos a los que les gusta el picante!"
    },
    {
        id: 3,
        nombre: "Guacamole",
        categoria: "Guacamole",
        precio: 950,
        img: "/img/guacsimp.jpeg",
        idCat: "guacamole",
        descripcion: "Este es un guacamole para a los que nos gusta el sabor riquisimo sin picantes innecesarios!"
    },
    {
        id: 4,
        nombre: "Palta Madura",
        categoria: "palta",
        precio: 3500,
        img: "/img/palta.jpeg",
        idCat: "palta",
        descripcion: "Esta es una palta que ya esta lista para su consumo!"
    }
];
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}
export const getProductoPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const porductosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(porductosCategoria)
        }, 100)
    })
}
export default misProductos