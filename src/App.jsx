import Navigator from "./assets/components/Navigator"
import { Routes, Route } from "react-router-dom"
import { Home } from "./assets/views/Home";
import Carrito from "./assets/views/Carrito";
import PizzaDetails from "./assets/components/PizzaDetails";
import ImagenCarrito from "./assets/components/ImagenCarrito";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContextProvider from "./assets/context/MyContext";
import { CarritoContextProvider } from "./assets/context/CarritoContext";





function App() {
  

  return (
    <div className="Contenedorr">
      <CarritoContextProvider>
        <MyContextProvider>
              <Navigator/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/carrito" element={<Carrito/>}/>  
                <Route path="/pizza/:id" element={<PizzaDetails/>} />
                <Route path="/pizza2/:id" element={<ImagenCarrito/>} />
              </Routes>
          </MyContextProvider>
        </CarritoContextProvider>
        
    </div>
      
  )
}
export default App;


