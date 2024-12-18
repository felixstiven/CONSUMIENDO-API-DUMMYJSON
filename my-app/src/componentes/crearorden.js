import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";
// import Swal from 'sweetalert2';



function Crearorden(){
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [orden, setOrden] = useState("");
    const [ordenesTomadas, setOrdenesTomadas] = useState([]);
    // const [id, setId] = useState();


    const add = () =>{
      Axios.post("http://localhost:3001/create", {
        nombre: nombre,
        descripcion: descripcion,
        orden: orden
      }).then(()=>{
        getOrdenesTomadas()
      })
    }

    const getOrdenesTomadas = () => {
      Axios.get("http://localhost:3001/materiales").then((response)=>{
        setOrdenesTomadas(response.data);
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
              // editar?
                  // <div>
                  //   <button  className="btn btn-info m-2" onClick={update}>Actualizar</button>
                  //   <button  className="btn btn-warning m-2" onClick={limpiarCampos}>Cancelar</button>
                  // </div>  
                    <button  className="btn btn-primary" onClick={add}>Registrar</button>
            }
          </div>
        </div>
        <div>
        <table className="table table-striped">
              <thead>
                  <tr>
                      <th scope="col">nombre</th>
                      <th scope="col">descripcion</th>
                      <th scope="col">numero orden</th>
                  </tr>
              </thead>
              <tbody>
            {/* <button className='btn btn-success' onClick={getEmpleados}>Listar</button>  */}
            {
              ordenesTomadas.map((val, key)=>{
                return  <tr key={val.id}>
                            <td>{val.nombre}</td>
                            <td>{val.descripcion}</td>
                            <td>{val.orden}</td>
                        </tr>         
              })

            }
        </tbody>
          </table>
        </div>
        <div>
            <button onClick={()=> navigate(-1)}>volver</button>
        </div>
      </>
    )
}

export default Crearorden;