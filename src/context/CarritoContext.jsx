import React, { useState, createContext, useEffect } from 'react';

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const nuevoTotal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        const nuevaCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        setTotal(nuevoTotal);
        setCantidadTotal(nuevaCantidad);
    }, [carrito])

    const agregarAlCarrito = (id, nombre, precio, cantidad) => {


        const precioNum = Number(precio) || 0;
        const cantidadNum = Number(cantidad) || 0;

        const productoExistente = carrito.find(prod => prod.id === id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { id, nombre, precio: precioNum, cantidad: cantidadNum }]);
        } else {
            setCarrito(prev =>
                prev.map(prod =>
                    prod.id === id ? { ...prod, cantidad: prod.cantidad + cantidadNum } : prod
                )
            );
        }

        setCantidadTotal(prev => prev + cantidadNum);
        setTotal(prev => prev + precioNum * cantidadNum);


    };

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.id === id);
        if (!productoEliminado) return;

        setCarrito(prev => prev.filter(prod => prod.id !== id));
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - productoEliminado.precio * productoEliminado.cantidad);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        localStorage.removeItem("carrito");
    };

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
