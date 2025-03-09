
import { useState, useTransition} from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard.jsx";
import { Header } from "../Header/Header.jsx";
import './buscarUsuarios.css'


const fetchData = async (nombre) =>{
    try{ 
        const BASE_URL ="http://localhost:4000/usuario/filter";
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


export const BuscarUsuarios = () => {  
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
                    setWeather(data);  
                    setFetchError(null); // Limpia errores  
                }  
            });  
        });  
    };  

    const handleDelete =(id) => {
        setWeather((prevWeather) => prevWeather.filter(user => user._id !== id));
    }

    return (
        <>
            <Header title="Buscar usuarios" />
            <div className="container-buscar">
                <h1>Buscar usuarios</h1>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button onClick={handleSubmit}>Buscar</button>
            </div>
            

            {isPending && <div>loading....</div>}
            {fetchError && <div>Error: {fetchError} </div>}
            {weather.length > 0 ? (
                weather.map((weathers)=>(
                    <WeatherCard key={weathers._id} weather={weathers} onDelete={handleDelete} /> 
                ))
            ) : (
                <div>No hay usuarios encontrados.</div> 
            )}
        </>    
       
    );
};



