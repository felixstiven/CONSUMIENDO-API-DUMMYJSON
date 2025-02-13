
import { useState, useTransition} from "react";
import { WheatherCard } from "../WeatherCard/WeatherCard";
import { Header } from "../Header/Header";


const fetchData = async (nombre) =>{
    try{
         
      const BASE_URL ="http://localhost:5000/usuario/nombre";
      const response = await fetch(`${BASE_URL}/${nombre}`);
  
      if(!response.ok){
          throw new Error("Error fetching data");
      }
      const data = await response.json();
      return Array.isArray(data) ? data:[];
    }catch(error){
        console.log(error);
        return "error fetchind data catch example"
    }   
};


export const FormData = () => {  
    const [nombre, setNombre] = useState("");  
    const [isPending, startTransition] = useTransition();  
    const [weather, setWeather] = useState([]);  
    const [fetchError, setFetchError] = useState(null); // Agregamos estado para manejar errores  

    const handleSubmit = () => {  
        startTransition(() => {  
            fetchData(nombre).then(data => {  
                if (data.error) {  
                    setFetchError(data.error); // Maneja el error  
                    setWeather([]); // Limpia los datos  
                } else {  
                    console.log(weather);
                    setWeather(data);  
                    setFetchError(null); // Limpia errores  
                }  
            });  
        });  
    };  

    return (
        <>
            
            <Header title="Buscar usuarios" />
            <h1>Buscar usuarios</h1>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button onClick={handleSubmit}>Buscar</button>

            {isPending && <div>loading....</div>}
            {fetchError && <div>Error: {fetchError} </div>}
            {weather.length > 0 ? (
                weather.map((weathers)=>(
                    <WheatherCard key={weathers._id} weather={weathers} /> 
                ))
            ) : (
                <div>No hay usuarios encontrados.</div> 
            )}
        </>    
       
    );
};



