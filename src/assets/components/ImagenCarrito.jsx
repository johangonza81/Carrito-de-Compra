import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { CarritoContext, useCarrito } from "../context/CarritoContext";
import { useContext } from "react";

const ImagenCarrito = () => {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);
    const { eliminarDelCarrito,carrito,SetCarrito } = useContext(CarritoContext);
    
    const Newpizza = pizzas.find((pizza) => pizza.id.toString() === (id));
    
  
    
    

    return (
        <div>        
            {carrito.map((cart)=>{
            return(
            <div className="conatienrCardCarro">
            <div key={cart.id}>
                <Card className="cardDetalle41">
                    <Card.Img className="imagenCarrito"  src={cart.img} />        
                </Card>
            </div>
            <div className="btnCarro">
                <Button className="btnCarro2" variant="danger" onClick={() => eliminarDelCarrito(cart.id)}>-</Button>
                <Button onClick={() => SetCarrito({...carrito,Newpizza})}className="btnCarro2" variant="primary">+</Button>
            </div>
        </div>
        )
        }) 
    } 
    </div>

    );
};

export default ImagenCarrito;