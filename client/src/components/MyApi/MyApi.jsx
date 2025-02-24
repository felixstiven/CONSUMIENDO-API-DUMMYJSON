import './MyApi.css'
import { useState } from "react";
import { Header } from "../Header/Header"
import FormUser from "../Register_Login/FormRegister";
import { FcAcceptDatabase } from "react-icons/fc";

export default function MyApi() {
    const [estado, setEstado] = useState(false);

    const handleEstado = ()=>{
        setEstado(!estado);
    }

  return (
    <>
        <Header title="My Api"/>
        <section className="container-api">
                <div className="text-api">
                    <h1>API RESTFUL</h1>
                    <p>
                        Una arquitectura cliente-servidor compuesta de clientes, servidores y recursos, con la gestión de solicitudes a  HTTP  para realizar operaciones estándar de bases de datos, como crear, leer, actualizar y eliminar registros.
                        Esta Api es construida por el lado del cliente FRONT-END con ReactJs, boostrap, css y librerias de UI, por el lado del servidor NodeJs, Express y en la base de datos MongoDB.
                    </p>
                </div>
                <div className='play'>
                    <span> Juega con las Peticiones  de usuarios del Frot-end y respuestas de servidor Back-end.  y comprueba una Api Restful De Usuarios.</span> 
                    <button onClick={handleEstado}>Jugar</button>
                </div>
                
        </section>
        <div className='container-play'>
            { 
                estado ? <FormUser/>  : <div className='container-loading'><FcAcceptDatabase className='loading'/></div>
            }
        </div>
        
            
    </>
  )
}

