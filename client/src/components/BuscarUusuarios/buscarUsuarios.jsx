
import { useState, useTransition} from "react";

const fetchData = async (nombre) =>{
    try{
         
      const BASE_URL ="http://localhost:5000/usuario/nombre";
      const response = await fetch(`${BASE_URL}/${nombre}`);
  
      if(!response.ok){
          throw new Error("Error fetching data");
      }
      const data = await response.json();
      return data
    }catch(error){
        console.log(error);
        return "error fetchind data catch example"
    }   
};


export const FormData = () => {  
    const [nombre, setNombre] = useState("");  
    const [isPending, startTransition] = useTransition();  
    const [weather, setWeather] = useState(null);  
    const [fetchError, setFetchError] = useState(null); // Agregamos estado para manejar errores  

    const handleSubmit = () => {  
        startTransition(() => {  
            fetchData(nombre).then(data => {  
                if (data.error) {  
                    setFetchError(data.error); // Maneja el error  
                    setWeather(null); // Limpia los datos  
                } else {  
                    setWeather(data);  
                    setFetchError(null); // Limpia errores  
                }  
            });  
        });  
    };  

    return (
        <div>
            <h1>wheater app</h1>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button onClick={handleSubmit}>Buscar</button>

            {isPending && <div>loading....</div>}
            {weather && <pre>{JSON.stringify(weather, null, 2)}</pre>}
        </div>
    )
};



