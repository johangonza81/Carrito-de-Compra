import { createContext,useEffect,useState } from "react";

export const MyContext = createContext();

const MyContextProvider= ({children}) =>{
    const [pizzas,setPizzas] = useState([])


    useEffect(() => {
        const fetchPizzas = async () => {
          try{
          const response = await fetch("/public/data/pizzas.json");
          const data = await response.json();
          setPizzas(data);
        }catch (error) {
          console.error(error);
          setPizzas([]);
        }
        };
        fetchPizzas();
      }, []);

    
    




return(
    <>
    <MyContext.Provider value={{pizzas}}>
        {children}
    </MyContext.Provider>
    </>
)

}
export default MyContextProvider;