import ImagenCarrito from "../components/ImagenCarrito";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
 
const Carrito = () => {
    const { cantidad,incrementarCantidad,decrementarCantidad } = useContext(CarritoContext);


    return (
        <>
        <h1 className="carritoc">Carrito</h1>
       <ImagenCarrito catidad={cantidad} incrementarCantidad={incrementarCantidad} decrementarCantidad={decrementarCantidad} />
        </>
    );
};

export default Carrito;
