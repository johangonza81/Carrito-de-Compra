import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";

const PizzaDetails = () => {
    const { id } = useParams();
    const { pizzas } = useContext(MyContext);
    const pizza = pizzas.find((pizza) => pizza.id.toString() === (id));
    
   
    return (
        <>
        <h3>Descripción</h3>
        <div className="Descripcion">
            <div className="Descripcion3">
            <Card className="cardDetalle4">
                <Card.Img className="imagenDetalle" variant="top" src={pizza.img} />
                
            </Card>
            </div>
            <div className="Descripcion4">
            <Card className="cardDetalle">
            <Card.Body>
                <Card.Title className="titulo">{pizza.name}<hr className="hr2"/></Card.Title>
                <div><p>{pizza.desc}</p></div>
                <div>
                    <p className="tituloIngre"><b>INGREDIENTES</b></p>
                    {pizza.ingredients.map((ingredient,index) =>(  
                    <li className="listaDes"key={index}>{ingredient}</li>     
                    ))}
                </div>
                <h4>${pizza.price}</h4>
            </Card.Body>
        </Card>
        </div>
    </div>
    </>
    );
};

export default PizzaDetails;