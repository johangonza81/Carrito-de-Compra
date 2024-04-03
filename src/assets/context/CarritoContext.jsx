import React, { createContext, useContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (id) => {
        setCarrito([...carrito, id]);
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((item) => item !== id);
        setCarrito(nuevoCarrito);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito,setCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("useCarrito debe ser utilizado dentro de un CarritoContextProvider");
    }
    return context;
};
