import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'; // libreria client




function Crearorden(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);
    const [showData, setShowData] = useState(false)

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [orden, setOrden] = useState("");
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState();


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
  const clearDatos = ()=>{
      setData([]);
      setShowData(false)
  }

  const editarOrden = (val) =>{
    setEditar(true);
    setId(val.id);
    setNombre(val.nombre);
    setDescripcion(val.descripcion);
    setOrden(val.orden);

  }


    const add = () =>{
      Axios.post("http://localhost:3001/create", {
        nombre: nombre,
        descripcion: descripcion,
        orden: orden
      }).then(()=>{
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

    const limpiarDatos= ()=>{
      setNombre("");
      setDescripcion("");
      setOrden("");
      setId("")
      setEditar(false)
    }

    const update = ()=>{
      Axios.put("http://localhost:3001/update", {
        id:id,
        nombre:nombre,
        descripcion:descripcion,
        orden:orden
      }).then(()=>{ //luego de que se envie la peticion
        getOrdenes()
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

    // const getOrdenes = ()=>{
    //   Axios.get("http://localhost:3001/ordenes").then((response)=>{  
    //     setData(response.data)
    // })
    const getOrdenes = ()=>{
        Axios.get("http://localhost:3001/ordenes").then((response)=>{
          setData(response.data)
        })
    }


    return (
      <><div>
            <h1>Solicitud de ordenes</h1>
        </div>
        <div className="card text-center">
          <div className="card-header">
            Ordenes
          </div>
          <div className="card-body">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">Nombre:</span>
              <input 
                  onChange={(event)=> {
                    setNombre(event.target.value);
                  }}
                type="text" className="form-control" placeholder='ingresa un nombre'  value={nombre} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">Descripcion:</span>
              <input 
                  onChange={(event)=> {
                    setDescripcion(event.target.value);
                  }}
                type="text" className="form-control" placeholder='ingresa Descripcion' value={descripcion} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">Orden:</span>
              <input 
                  onChange={(event)=> {
                    setOrden(event.target.value);
                  }}
                type="number" className="form-control" placeholder='ingresa numero de orden' value={orden} aria-label="Username" aria-describedby="basic-addon1"/>
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
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">numero de orden</th>
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
                                <td>{val.nombre}</td>
                                <td>{val.descripcion}</td>
                                <td>{val.orden} </td>
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
        <div>
            <button onClick={()=> navigate(-1)}>volver</button>
        </div>
      </>
    )
  }


export default Crearorden;
