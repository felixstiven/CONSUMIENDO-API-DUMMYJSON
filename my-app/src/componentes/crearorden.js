
import {useState} from 'react';
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'; 
import {BackButton} from './hook';

function Crearorden() {

  const [orden, setOrden] = useState("");
  const [contrato, setContrato] = useState();
  const [cliente, setcliente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState();
  const [estado, setEstado] = useState("pendiente");
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState();
  
  const [ordenesList,setordenes] = useState([]);
  
// peticion  enviar al backend guardar datos
  const add = () => {
    Axios.post("http://localhost:3001/create", { // metodo utilzado en el back
      orden,
      contrato,
      cliente,
      descripcion,
      nombre,
      estado,
    }).then(()=>{ //luego de que se envie la peticion
      limpiarCampos();
      Swal.fire({
        title: " <h1>Registro exitoso!!</h1>",
        html: "la orden <strong>"+orden+"</strong> se ha agregado correctamente",
        icon: "succes",
        timer : 3000
      })
    }).catch(function(err){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se logro agregar la orden",
        footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "Intenta mas tarde" : "Error en el servidor"
      });
    })
  }

// peticion al backen actualizacion de datos existentes  
  const update = () => {
    Axios.put("http://localhost:3001/update", { // metodo utilzado en el back
      id,
      orden,
      contrato,
      cliente,
      descripcion,
      nombre,
      estado,
    }).then(()=>{ //luego de que se envie la peticion
      getOrdenes();
      limpiarCampos();
      Swal.fire({
        title: " <h1>Actualizacion exitosa!!</h1>",
        html: "la  <strong>"+orden+"</strong> fue actualizado correctamente",
        icon: "succes",
        timer : 4000
      })
    }).catch(function(err){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se logro actualizar el empleado",
        footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "intenta mas tarde" : JSON.parse(JSON.stringify(err)).message
      });
    })
  };

// cambio de estado 
const cambiarEstado = (id, nuevoEstado) => {
  Axios(`http://localhost:3001/cambiar_estado/${id}`, {estado: nuevoEstado})
  .then(() =>{
    getOrdenes(); // llmada para actualoizar la lista de ordenes 
    Swal.fire('Estado actualizado', '', 'success');
  })
  .catch(err => {
    console.log(err);
    Swal.fire('Error', 'No se pudo actualizar el estado', 'error');
  });
}
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
    setId("");
    setEditar(false);
    
  }
  
// funcion editar datos tabla existentes  
  const editarOrden = (val) =>{
    setEditar(true);

    setOrden(val.orden);
    setContrato(val.contrato);
    setcliente(val.cliente);
    setDescripcion(val.descripcion);
    setNombre(val.nombre);
    setId(val.id);
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
              <div className="input-group input-group-sm mb-3">  
                    <span className="input-group-text">Estado:</span>  
                    <select value={estado} onChange={(event) => setEstado(event.target.value)} className="form-select">  
                        <option value="pendiente">Pendiente</option>  
                        <option value="completada">Completada</option>  
                        <option value="cancelada">Cancelada</option>
                    </select>  
              </div>
              {
                editar?
                    <div>
                      <button  className="btn btn-info m-2" onClick={update}>Actualizar</button>
                      <button  className="btn btn-warning m-2" onClick={limpiarCampos}>Cancelar</button>
                    </div>  
                      :<button  className="btn btn-primary" onClick={add}>Registrar</button>
              }
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
                                    <button type="button" className="btn btn-info"
                                      onClick={()=>{
                                          editarOrden(val);
                                      }}
                                    >Editar</button>
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


export default Crearorden;



