import { NavLink } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';



const Navigator = () => {
    

  return (
    <nav className="container">
        <div className="navar">
            <div className="navar2">
                <NavLink to= "/">🍕</NavLink>    
            </div>
            <div className="navar3">
                <NavLink activeClassName="active" to = "/Home"> Home </NavLink>
                <NavLink activeClassName="active" to = "/Carrito"> <FaShoppingCart/> 
                Carrito  </NavLink>
                
            </div>
        </div>
        <div className="navarr"> 
            <h2>!Pizzeria Mamma Mia!</h2>
            <p className="prim">!Tenemos las mejores Pizzas que podras Encontrar!</p>
            <hr></hr>
        </div>    
    </nav>
  )
}
export default Navigator;
