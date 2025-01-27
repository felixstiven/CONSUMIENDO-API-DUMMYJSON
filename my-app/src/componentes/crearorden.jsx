
import {useState} from 'react';
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'; 
import {BackButton} from './hook';
import './styleCrearorden.css';
import ListarOrdenes from './ListarOrdenes';

function Crearorden() { 

  const [orden, setOrden] = useState("");
  const [contrato, setContrato] = useState();
  const [cliente, setcliente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombre, setNombre] = useState();
  const [numPhone, setNumPhone] = useState("");
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState();
  
  const [ordenesList,setordenes] = useState([]);
  
  // peticion  enviar al backend guardar,agregar datos
  const add = () => {
    Axios.post("http://localhost:3001/create", { // metodo utilzado en el back
      orden,
      contrato,
      cliente,
      descripcion,
      nombre,
      numPhone
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
    }).then(()=>{ //luego de que se envie la peticion
      getOrdenes();
      limpiarCampos();
      Swal.fire({
        title: " <h1>Actualizacion exitosa!!</h1>",
        html: "la orden  <strong>"+orden+"</strong> fue actualizado correctamente",
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
  };

  // funcion de limpiar campos tabla  despues de una peticion 
  const limpiarCampos = () => {
    setOrden("");
    setContrato("");
    setcliente("");
    setDescripcion("");
    setNombre("");
    setId("");
    setEditar(false);
    
  }

  // funcion para ocultar lista de datos en tabla  
  const ocultarOrdenes = () =>{
    setordenes([])
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
  
  //peticion al backend para obtener todos los datos guardados en la base
  const getOrdenes = () => {
      Axios.get("http://localhost:3001/ordenes").then((response)=>{
        setordenes(response.data);
      });
  }  


  // renderizado
  return (
    <>
          <div className="container">
            <div className="card text-center">
              <div className="card-header">
                GESTION DE ORDENES
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
                  <span className="input-group-text" id="inputGroup-sizing-sm">Numero celular solcicitante:</span>
                  <input 
                      onChange={(event)=> {
                        setNumPhone(event.target.value);
                      }}
                    type="tel" className="form-control" placeholder='ejemplo: +573132564789' value={numPhone} aria-label="Username" aria-describedby="basic-addon1"/>
                </div> 
                { editar?
                    <div>
                      <button  className="btn btn-info m-2" onClick={update}>Actualizar</button>
                      <button  className="btn btn-warning m-2" onClick={limpiarCampos}>Cancelar</button>
                    </div>  
                      :<button  className="btn btn-primary" onClick={add}>Registrar</button>
                }
              </div>
            </div>
            <div className="col-md-6 mostra">
                <button className='btn btn-success btn-2' onClick={getOrdenes}>Listar</button> 
                <button className='btn btn-success btn-2' onClick={ocultarOrdenes}>Ocultar</button> 
            </div>
          </div>
          <section className='table-'>
             <ListarOrdenes ordenesList={ordenesList} setOrdenes={setOrden}  editOrder={editarOrden} setEditing={setEditar}/>
          </section> 
          <div>
            <BackButton/>
          </div>
    </>
  )

}
    


export default Crearorden



