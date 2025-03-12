
import { useState, useTransition} from "react";
import { FilterCard} from "../WeatherCard/FilterCard.jsx";
import { Header } from "../Header/Header.jsx";
import './buscarUsuarios.css'



const fetchData = async () => {
    try {
        const BASE_URL = "http://localhost:4000/usuario";
        const response = await fetch(BASE_URL);

        if(!response.ok){
            throw new Error("Error fetching data");
        }
        const data = await response.json();

        return Array.isArray(data) ? data:[];
    }catch(error){
        console.log(error);
        return "error fetchind data catch example"
    }
}


const fetchDataFilter = async (nombre) =>{
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
    const [filter, setFilter] = useState([]);  
    const [fetchError, setFetchError] = useState(null); // Agregamos estado para manejar errores  


    const handleSubmitGetUsuarios = () => {
        startTransition(() => {
            fetchData().then(data => {
                if (data.error) {
                    setFetchError(data.error); // Maneja el error
                    setFilter([]); // Limpia los datos
                } else {
                    setFilter(data);
                    setFetchError(null); // Limpia errores
                }
            });
        })

    }

    const handleSubmitFilter = () => {  
        startTransition(() => {  
            fetchDataFilter(nombre).then(data => {  
                if (data.error) {  
                    setFetchError(data.error); // Maneja el error  
                    setFilter([]); // Limpia los datos  
                } else {  
                    setFilter(data);  
                    setFetchError(null); // Limpia errores  
                }  
            });  
        });  
    };  

    const handleDelete =(id) => {
        setFilter((prevWeather) => prevWeather.filter(user => user._id !== id));
    }

    return (
        <>
            <Header/>
            <div className="container-buscar">
                <div className="container-buscar-name">
                    <h1>BUSCA TU USUARIO </h1>
                    <p></p>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <button onClick={handleSubmitFilter}>Buscar</button>
                </div>
                <div className="container-buscar-name">
                    <h1>BUSCAR TODOS LOS  USUARIOS</h1>
                    <button onClick={handleSubmitGetUsuarios}>Buscar</button>
                </div>
                
            </div>
            

            {isPending && <div>loading....</div>}
            {fetchError && <div>Error: {fetchError} </div>}

            <div className="container-weather">
                {filter.length > 0 ? (
                    filter.map((filters)=>(
                        <FilterCard key={filters._id} filter={filters} onDelete={handleDelete} /> 
                    ))
                ) : (
                    <div>No hay usuarios encontrados.</div> 
                )}
            </div>
        </>    
       
    );
};



