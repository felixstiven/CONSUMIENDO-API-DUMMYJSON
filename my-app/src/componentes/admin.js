
import {useState} from 'react';
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'; 
import {BackButton} from './hook';

function CrearordenAdmin() {

  const [orden, setOrden] = useState("");
  const [contrato, setContrato] = useState();
  const [cliente, setcliente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState();

  
  const [ordenesList,setordenes] = useState([]);
  


// peticion al backend eliminar datos de tabla existentes  
  const deleteOrdenes = (val) => {  
      Swal.fire({
        title: "Eliminar Orden?",
        html: "<i> ¿Estas seguro de eliminar la orden <strong>"+val.orden+"</strong>?</i>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{ //luego de que se envie la peticion
            getOrdenes();
            limpiarCampos();
            Swal.fire({
              title: "Eliminado",
              text: `${val.orden} fue eliminado`,
              icon: "success",
              timer : 3000
            });
          }).catch(function(err){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logro eliminar el empleado!",
              footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "intenta mas tarde" : JSON.parse(JSON.stringify(err)).message
            });
          })
        }
      })
  }
  
// funcion de limpiar campos tabla  depues de una peticion 
  const limpiarCampos = () => {
    setOrden("");
    setContrato("");
    setcliente("");
    setDescripcion("");
    setNombre("");
    
  }
  

// funcion para ocultar lista de datos en tabla  
const ocultarOrdenes = () =>{
  setordenes([])
}

// peticion al backend para obtener todos los datos guardados en la base
  const getOrdenes = () => {
    Axios.get("http://localhost:3001/ordenes").then((response)=>{
      setordenes(response.data);
    });
  }  
  

    return (
      <div className="container">
      
          <div className="card text-center">
            <div className="card-header">
              GESTION DE Ordenes
            </div>
            <div className="card-body">
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Numero de Orden:</span>
                <input 
                    onChange={(event)=> {
                      setOrden(event.target.value);
                    }}
                  type="text" className="form-control" placeholder='ingresa numero de orden'  value={orden} aria-label="Username" aria-describedby="basic-addon1" required />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Numero contrato:</span>
                <input 
                    onChange={(event)=> {
                      setContrato(event.target.value);
                    }}
                  type="text" className="form-control" placeholder='ingresa un numero contrato' value={contrato} aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Nombre cliente contrato:</span>
                <input 
                    onChange={(event)=> {
                      setcliente(event.target.value);
                    }}
                  type="text" className="form-control" placeholder='ingresa nombre cliente' value={cliente} aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Descripcion:</span>
                <input 
                    onChange={(event)=> {
                      setDescripcion(event.target.value);
                    }}
                  type="text" className="form-control"  placeholder='ingresa descripcion' value={descripcion} aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Nombre solcicitante:</span>
                <input 
                    onChange={(event)=> {
                      setNombre(event.target.value);
                    }}
                  type="text" className="form-control" placeholder='ingresa nombre' value={nombre} aria-label="Username" aria-describedby="basic-addon1"/>
              </div>  
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Orden</th>
                <th scope="col">Contrato</th>
                <th scope="col">Cliente</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
                <button className='btn btn-success' onClick={getOrdenes}>Listar</button> 
                <button className='btn btn-success' onClick={ocultarOrdenes}>Ocultar</button> 
                {
                  ordenesList.map((val, key)=>{
                    return  <tr key={val.id}>
                                <th >{val.id}</th>
                                <td>{val.orden}</td>
                                <td>{val.contrato}</td>
                                <td>{val.cliente}</td>
                                <td>{val.descripcion}</td>
                                <td>{val.nombre}</td>
                                <td>
                                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" onClick={()=>{
                                      deleteOrdenes(val);
                                    }} className="btn btn-warning">Eliminar</button>
                                  </div>
                                </td>
                                <td>{val.estado}</td>
                            </tr>         
                  })
                }
            </tbody>
          </table>
          <div>
              <BackButton/>
          </div>
      </div>  
    );
}    


export default CrearordenAdmin;
