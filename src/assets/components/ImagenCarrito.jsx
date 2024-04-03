import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { CarritoContext, useCarrito } from "../context/CarritoContext";
import { useContext } from "react";

const ImagenCarrito = () => {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);
    const { carrito,SetCarrito,cantidad,incrementarCantidad,decrementarCantidad } = useContext(CarritoContext);
    
    const Newpizza = pizzas.find((pizza) => pizza.id.toString() === (id));
    
    const actualizarCarrito = () =>{
        SetCarrito({...Newpizza,carrito})
    }
    
    

    return (
        <div > 
            <h4 className="detalle">Detalle del Pedio:</h4>       
            {carrito.map((cart)=>{
               console.log(cart.name) 
            return(
                
            <div key={cart.id}>           
            
            <div  className="conatienrCardCarro">
            <div className="primera">
                
                <Card className="cardDetalle41">
                <div>
                    
                    <Card.Img className="imagenCarrito"  src={cart.img} /> 
                </div> 
                <div>
                    <h3>{cart.name}</h3>
                </div> 
                </Card>
                    
            </div>
            <div className="btnCarro">
                <Button onClick= {decrementarCantidad}className="btnCarro2" variant="danger" >-</Button>
                {cantidad}
                <Button onClick= {() =>{incrementarCantidad(),actualizarCarrito()}} className="btnCarro2" variant="primary">+</Button>
            </div>
        </div>
        </div>
        )
        }) 
    } 
    </div>

    );
};

export default ImagenCarrito;