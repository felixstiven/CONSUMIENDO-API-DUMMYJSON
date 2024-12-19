import React, {useState} from "react";
import axios from "axios";

const DataButton  = () =>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);
    const [showData, setShowData] = useState(false)

    const fetchData = async ()=>{
        setLoading(true);
        setError(null);
        try{
            const response = await axios.get('http://localhost:3001/materiales');
            setData(response.data);
            setShowData(true); // mostrar datos depues de cargar 
        } catch (err){
            setError('ERROR AL CARGAR LOS DATOS');
        } finally{
            setLoading(false);
        }
    };
    const clearDatos = ()=>{
        setData([]);
        setShowData(false)
    }

    return (
        <div>
            <button  className="btn btn-primary mr-2" onClick={fetchData}>Cargar datos</button> 
            <button  className="btn btn-primary mr-2" onClick={clearDatos}>limpiar tabla</button>
            <table className="table table-striped">
                <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">numero de orden</th>
                        </tr>
                </thead>
                    {loading && <p>Cargando...</p>}
                    {error && <p>{error}</p>}
                    {showData && (     
                        <tbody>
                        {data.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.orden} </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button  type="button" className="btn btn-primary mr-2"
                                            onClick=""
                                        >
                                            Editar
                                        </button>
                                        <button  type="button" className="btn btn-primary mr-2"
                                            onClick=""
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody> 
                    )}
            </table>
        </div>
    )
    
};

export default DataButton;

