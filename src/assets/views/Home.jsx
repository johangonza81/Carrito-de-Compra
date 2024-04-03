
import { Card,Button, CardFooter } from "react-bootstrap"
import { useContext} from "react";
import { MyContext } from "../context/MyContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';



export const Home = () => {
    const {pizzas} = useContext(MyContext)
    
        
   
    
  return (
    <div className='cardPP'>
        {pizzas.map((pizza) =>{
            
                return (
                   
                    <Card key={pizza.id} >
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title>{pizza.name}<hr className="hr2"/></Card.Title>
                            <Card.Text>
                            <div>
                                {pizza.ingredients.map((ingredient,index) =>(  
                                <li key={index}>{ingredient}</li>     
                            ))}
                            </div>
                            <h4>${pizza.price}</h4>
                            </Card.Text>
                        </Card.Body>
                        <CardFooter>
                        <div className="btnn">
                            <Link to={`/pizza/${pizza.id}`}>
                            <Button  variant="primary">Ver Mas</Button></Link>
                            <Link to={`/pizza2/${pizza.id}`}>
                            <Button  variant="warning">Añadir <FaShoppingCart/></Button></Link>
                        </div>
                        </CardFooter>
                    </Card>
               
                )


            })
        } 
  </div>
  )}

