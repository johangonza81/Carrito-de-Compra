import React, { createContext, useContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const[cantidad,setCantidad]= useState("0")

    const agregarAlCarrito = (id) => {
        setCarrito([...carrito, id]);
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((item) => item !== id);
        setCarrito(nuevoCarrito);
    };

    const incrementarCantidad = (id) =>{
        setCantidad(Number(cantidad) + Number(1))
    }

    const decrementarCantidad = (id) =>{
        if(Number(cantidad)>Number(0)){
        setCantidad(Number(cantidad) - Number(1))
    }
    }


    return (
        <CarritoContext.Provider value={{ 
            carrito, 
            agregarAlCarrito,
             eliminarDelCarrito,
             setCarrito,
             cantidad,
             incrementarCantidad,
             setCantidad,
             decrementarCantidad }}>
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
