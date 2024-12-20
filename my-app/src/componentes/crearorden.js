import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'; // libreria client
import './styleNavbar.css'





function Crearorden(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);
    const [showData, setShowData] = useState(false)

    const navigate = useNavigate();

    const [orden, setOrden] = useState("");
    const[numeroContrato, setNumeroContrato] = useState("");
    const [cliente, setCliente] = useState("");
    const [fechaSolicitud, setFechaSolicitud] = useState("");
    const [fechaEntrega, setFechaEntrega] = useState("");
    const [direccion, setDireccion] = useState("");
    const [nombreSolicitante, setNombreSolicitante] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState();

// funcion para obtener y mostrar los datps
    const fetchData = async ()=>{
      setLoading(true);
      setError(null);
      try{
          const response = await Axios.get('http://localhost:3001/ordenes');
          setData(response.data);
          setShowData(true); // mostrar datos depues de cargar 
      } catch (err){
          setError('ERROR AL CARGAR LOS DATOS');
      } finally{
          setLoading(false);
      }
  };

// funcion para ocultar los datos
  const clearDatos = ()=>{
      setData([]);
      setShowData(false)
  }

// funcion para editar las ordenes
  const editarOrden = (val) =>{
    setEditar(true);

    setId(val.id);
    setOrden(val.nombre);
    setNumeroContrato(val.descripcion);
    setCliente(val.orden);
    setFechaSolicitud(val.fechaSolicitud);
    setFechaEntrega(val.fechaEntrega);
    setDireccion(val.direccion);
    setNombreSolicitante(val.nombreSolicitante);
    setDescripcion(val.descripcion)
  }

// funcion para agregar y guardar los datos
    const add = () =>{
      Axios.post("http://localhost:3001/create", {
        orden: orden,
        numeroContrato: numeroContrato,
        cliente: cliente,
        fechaSolicitud: fechaSolicitud,
        fechaEntrega: fechaEntrega,
        direccion: direccion,
        nombreSolicitante: nombreSolicitante,
        descripcion: descripcion
      }).then(()=>{
        getOrdenes();
        limpiarDatos();
        Swal.fire({
          title: " <h1>Registro exitoso!!</h1>",
          html: "la orden <strong>"+orden+"</strong> se ha enviado correctamente",
          icon: "succes",
          timer : 5000
        })
      }).catch(function(err){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logro enviar la orden",
          footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "Intenta mas tarde" : "Error en el servidor"
        })
      });
    }
// funcion para actualizar tabla de datos 
    const limpiarDatos= (val)=>{
      setEditar(true);

      setId(val.id);
      setOrden(val.nombre);
      setNumeroContrato(val.descripcion);
      setCliente(val.orden);
      setFechaSolicitud(val.fechaSolicitud);
      setFechaEntrega(val.fechaEntrega);
      setDireccion(val.direccion);
      setNombreSolicitante(val.nombreSolicitante);
      setDescripcion(val.descripcion)
    }
// funcion para actualizar datos 
    const update = ()=>{
      Axios.put("http://localhost:3001/update", {
        id:id,
        orden: orden,
        numeroContrato: numeroContrato,
        cliente: cliente,
        fechaSolicitud: fechaSolicitud,
        fechaEntrega: fechaEntrega,
        direccion: direccion,
        nombreSolicitante: nombreSolicitante,
        descripcion: descripcion
      }).then(()=>{ //luego de que se envie la peticion
        getOrdenes();
        limpiarDatos();
        Swal.fire({
          title: " <h1>Actualizacion exitosa!!</h1>",
          html: "la orden <strong>"+orden+"</strong> fue actualizado correctamente",
          icon: "succes",
          timer : 4000
        })
      }).catch(function(err){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logro actualizar la orden",
          footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "intenta mas tarde" : JSON.parse(JSON.stringify(err)).message
        });
      })
    }
// funcion eliminar datos 
    const deleteDatos = (val)=>{
      Swal.fire({
        title: "Eliminar Orden?",
        html: `<i>¿Esta seguro que desea eliminar la orden <strong>`+val.nombre+`</strong>?</i>`,
        icon:"Wwarning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if(result.isConfirmed){
          Axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{ //luego de que se envie la peticion
            getOrdenes();
            limpiarDatos();
            Swal.fire({
              title: "Eliminado",
              text:`${val.orden} fue eliminada correctamente`,
              icon: "success",
              timer : 3000
            });
          }).catch(function(err){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logro eliminar el empleado!",
              footer: JSON.parse(JSON.stringify(err)).message === "Network Error" ? "intenta mas tarde" : JSON.parse(JSON.stringify(err)).message
            })
          })
      }})
    }
// funcion obtener los datos guardados
    const getOrdenes = ()=>{
        Axios.get("http://localhost:3001/ordenes").then((response)=>{
          setData(response.data)
        })
    }


    return (

      <Container>
        <Row>
          <Col xs={12}>
              <><div className="text-center">
                    <h1>Solicitud de ordenes</h1>
                </div>
                <div className="card text-center">
                  <div className="card-header">
                    <strong>Requisitos llenar una orden:</strong>
                      <ul>
                        <li>Numero de orden debe seguir la lista en cola e iniciar con Gru-Orden-228</li>
                      </ul>
                  </div>
                  <div className="card-body">
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Numero de Orden:</span>
                      <input 
                          onChange={(event)=> {
                            setOrden(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa numero de orden/pedido'  value={orden} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Numero Contrato:</span>
                      <input 
                          onChange={(event)=> {
                            setNumeroContrato(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa Descripcion' value={numeroContrato} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Cliente:</span>
                      <input 
                          onChange={(event)=> {
                            setCliente(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa numero de orden' value={cliente} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Fecha de Solicitud:</span>
                      <input 
                          onChange={(event)=> {
                            setFechaSolicitud(event.target.value);
                          }}
                        type="date" className="form-control" placeholder='ingresa numero de orden' value={fechaSolicitud} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Fecha en la que se debe entregar:</span>
                      <input 
                          onChange={(event)=> {
                            setFechaEntrega(event.target.value);
                          }}
                        type="date" className="form-control" placeholder='ingresa numero de orden' value={fechaEntrega} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Sitio de entrega:</span>
                      <input 
                          onChange={(event)=> {
                            setDireccion(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa numero de orden' value={direccion} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Nombre del solicitante:</span>
                      <input 
                          onChange={(event)=> {
                            setNombreSolicitante(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa numero de orden' value={nombreSolicitante} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-sm">Descripcion:</span>
                      <input 
                          onChange={(event)=> {
                            setDescripcion(event.target.value);
                          }}
                        type="text" className="form-control" placeholder='ingresa numero de orden' value={descripcion} aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    {
                      editar?
                          <div>
                            <button  className="btn btn-info m-2" onClick={update}>Actualizar</button>
                            <button  className="btn btn-warning m-2" onClick={limpiarDatos}>Cancelar</button>
                          </div>  
                                :<button  className="btn btn-primary" onClick={add}>Registrar</button>
                    }
                  </div>
                </div>
                <div>
                <button  className="btn btn-primary mr-2" onClick={fetchData}>Cargar datos</button> 
                    <button  className="btn btn-primary mr-2" onClick={clearDatos}>limpiar tabla</button>
                    <table className="table table-striped">
                        <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">N° Orden</th>
                                    <th scope="col">N° Contrato</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Fecha Solicitud</th>
                                    <th scope="col">Fecha Entrega</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Nombre Solicitante</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                        </thead>
                            {loading && <p>Cargando...</p>}
                            {error && <p>{error}</p>}
                            {showData && (     
                                <tbody>
                                {data.map((val,key)=>(
                                    <tr key={val.id}>
                                        <td>{val.id} </td>
                                        <td>{val.orden}</td>
                                        <td>{val.numeroContrato}</td>
                                        <td>{val.cliente} </td>
                                        <td>{val.fechaSolicitud} </td>
                                        <td>{val.fechaEntrega} </td>
                                        <td>{val.direccion} </td>
                                        <td>{val.nombreSolicitante} </td>
                                        <td>{val.descripcion} </td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                <button  type="button" className="btn btn-primary mr-2"
                                                    onClick={()=>{
                                                        editarOrden(val)
                                                    }}
                                                >
                                                    Editar
                                                </button>
                                                <button  type="button" className="btn btn-primary mr-2"
                                                    onClick={()=>{
                                                      deleteDatos(val)
                                                    }}
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
                <div>
                    <button onClick={()=> navigate(-1)}>volver</button>
                </div>
              </>
          </Col>
        </Row>
      </Container>
    )        
}


export default Crearorden;
